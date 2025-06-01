import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateMenuItemDto, UpdateMenuItemDto } from './dto/menu-item.dto';

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
}
