import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import {
  CreateMenuItemDto,
  UpdateMenuItemDto,
  PaginatedMenuItemsQueryDto,
  PaginatedMenuItemsResponseDto,
  CategoryMenuItemsQueryDto,
  CategoryMenuItemsResponseDto,
} from './dto/menu-item.dto';

@Injectable()
export class MenuItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createMenuItemDto: CreateMenuItemDto, userId: number) {
    // Verify restaurant ownership
    const restaurant = await this.databaseService.restaurant.findFirst({
      where: {
        restId: createMenuItemDto.restId,
        userId: userId,
      },
    });

    if (!restaurant) {
      throw new ForbiddenException(
        'You do not have permission to add items to this restaurant',
      );
    }

    // Get category to ensure it belongs to the restaurant
    const category = await this.databaseService.restaurantCategories.findFirst({
      where: {
        categoryId: createMenuItemDto.restaurantCategoryId,
        restId: createMenuItemDto.restId,
      },
    });

    if (!category) {
      throw new NotFoundException(
        'Category not found or does not belong to this restaurant',
      );
    }

    return this.databaseService.menuItems.create({
      data: {
        ...createMenuItemDto,
        categorySlug: category.categorySlug,
        categoryDisplayName: category.displayName,
      },
    });
  }

  async findAll() {
    return this.databaseService.menuItems.findMany({
      where: {
        itemAvailable: true,
      },
      include: {
        restaurant: {
          select: {
            name: true,
            address: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.menuItems.findMany({
      where: {
        restId: id,
        itemAvailable: true,
      },
      include: {
        restaurant: {
          select: {
            name: true,
            address: true,
          },
        },
      },
    });
  }

  async update(
    id: number,
    updateMenuItemDto: UpdateMenuItemDto,
    userId: number,
  ) {
    // First get the menu item to check ownership
    const menuItem = await this.databaseService.menuItems.findUnique({
      where: { itemId: id },
      include: {
        restaurant: true,
      },
    });

    if (!menuItem) {
      throw new NotFoundException('Menu item not found');
    }

    // Verify restaurant ownership
    if (menuItem.restaurant.userId !== userId) {
      throw new ForbiddenException(
        'You do not have permission to update this menu item',
      );
    }

    // If category is being updated, verify it belongs to the restaurant
    if (updateMenuItemDto.restaurantCategoryId) {
      const category =
        await this.databaseService.restaurantCategories.findFirst({
          where: {
            categoryId: updateMenuItemDto.restaurantCategoryId,
            restId: menuItem.restId,
          },
        });

      if (!category) {
        throw new NotFoundException(
          'Category not found or does not belong to this restaurant',
        );
      }

      updateMenuItemDto.categorySlug = category.categorySlug;
      updateMenuItemDto.categoryDisplayName = category.displayName;
    }

    return this.databaseService.menuItems.update({
      where: { itemId: id },
      data: updateMenuItemDto,
    });
  }

  async remove(id: number, userId: number) {
    // First get the menu item to check ownership
    const menuItem = await this.databaseService.menuItems.findUnique({
      where: { itemId: id },
      include: {
        restaurant: true,
      },
    });

    if (!menuItem) {
      throw new NotFoundException('Menu item not found');
    }

    // Verify restaurant ownership
    if (menuItem.restaurant.userId !== userId) {
      throw new ForbiddenException(
        'You do not have permission to delete this menu item',
      );
    }

    return this.databaseService.menuItems.delete({
      where: { itemId: id },
    });
  }

  async findPaginated(
    restId: number,
    query: PaginatedMenuItemsQueryDto,
  ): Promise<PaginatedMenuItemsResponseDto> {
    const { limit = 10, cursor, categorySlug, includeImages = false } = query;

    // Build where clause
    const whereClause: any = {
      restId,
      itemAvailable: true,
    };

    if (categorySlug) {
      whereClause.categorySlug = categorySlug;
    }

    if (cursor) {
      whereClause.itemId = {
        gt: parseInt(cursor),
      };
    }

    // Get total count for this query
    const totalCount = await this.databaseService.menuItems.count({
      where: whereClause,
    });

    // Build include clause
    const includeClause: any = {
      restaurant: {
        select: {
          name: true,
          address: true,
        },
      },
    };

    if (includeImages) {
      includeClause.images = {
        select: {
          imageUrl: true,
        },
      };
    }

    // Fetch items
    const items = await this.databaseService.menuItems.findMany({
      where: whereClause,
      include: includeClause,
      take: limit + 1, // Take one extra to check if there are more
      orderBy: {
        itemId: 'asc',
      },
    });

    // Check if there are more items
    const hasMore = items.length > limit;
    const actualItems = hasMore ? items.slice(0, limit) : items;

    // Get next cursor
    const nextCursor = hasMore
      ? actualItems[actualItems.length - 1].itemId.toString()
      : undefined;

    // Get category info if filtering by category
    let categoryInfo:
      | {
          categorySlug: string;
          displayName: string;
          totalItems: number;
        }
      | undefined = undefined;
    if (categorySlug) {
      const category =
        await this.databaseService.restaurantCategories.findFirst({
          where: {
            restId,
            categorySlug,
          },
          select: {
            categorySlug: true,
            displayName: true,
          },
        });

      if (category) {
        categoryInfo = {
          categorySlug: category.categorySlug,
          displayName: category.displayName,
          totalItems: totalCount,
        };
      }
    }

    return {
      items: actualItems,
      nextCursor,
      hasMore,
      totalCount,
      categoryInfo,
    };
  }

  async findCategoryMenuItems(
    restId: number,
    categorySlug: string,
    query: CategoryMenuItemsQueryDto,
  ): Promise<CategoryMenuItemsResponseDto> {
    const { limit = 10, cursor, includeImages = false } = query;

    // Verify category exists
    const category = await this.databaseService.restaurantCategories.findFirst({
      where: {
        restId,
        categorySlug,
      },
    });

    if (!category) {
      throw new NotFoundException(
        `Category '${categorySlug}' not found for restaurant ${restId}`,
      );
    }

    // Build where clause
    const whereClause: any = {
      restId,
      categorySlug,
      itemAvailable: true,
    };

    if (cursor) {
      whereClause.itemId = {
        gt: parseInt(cursor),
      };
    }

    // Get total count for this category
    const totalItems = await this.databaseService.menuItems.count({
      where: whereClause,
    });

    // Build include clause
    const includeClause: any = {
      restaurant: {
        select: {
          name: true,
          address: true,
        },
      },
    };

    if (includeImages) {
      includeClause.images = {
        select: {
          imageUrl: true,
        },
      };
    }

    // Fetch items
    const items = await this.databaseService.menuItems.findMany({
      where: whereClause,
      include: includeClause,
      take: limit + 1, // Take one extra to check if there are more
      orderBy: {
        itemId: 'asc',
      },
    });

    // Check if there are more items
    const hasMore = items.length > limit;
    const actualItems = hasMore ? items.slice(0, limit) : items;

    // Get next cursor
    const nextCursor = hasMore
      ? actualItems[actualItems.length - 1].itemId.toString()
      : undefined;

    return {
      categorySlug,
      displayName: category.displayName,
      items: actualItems,
      nextCursor,
      hasMore,
      totalItems,
    };
  }

  async getRestaurantCategories(restId: number) {
    const categories = await this.databaseService.restaurantCategories.findMany(
      {
        where: {
          restId,
        },
        include: {
          _count: {
            select: {
              menuItems: {
                where: {
                  itemAvailable: true,
                },
              },
            },
          },
        },
        orderBy: {
          displayOrder: 'asc',
        },
      },
    );

    return categories.map((category) => ({
      categoryId: category.categoryId,
      categorySlug: category.categorySlug,
      displayName: category.displayName,
      displayOrder: category.displayOrder,
      itemCount: category._count.menuItems,
    }));
  }

  async getCategorySummary(restId: number) {
    const categories = await this.databaseService.restaurantCategories.findMany(
      {
        where: {
          restId,
        },
        include: {
          _count: {
            select: {
              menuItems: {
                where: {
                  itemAvailable: true,
                },
              },
            },
          },
        },
        orderBy: {
          displayOrder: 'asc',
        },
      },
    );

    return categories.map((category) => ({
      categorySlug: category.categorySlug,
      displayName: category.displayName,
      displayOrder: category.displayOrder,
      itemCount: category._count.menuItems,
    }));
  }
}
