import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MenuItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createMenuItemDto: Prisma.MenuItemsCreateInput) {
    return this.databaseService.menuItems.create({
      data: createMenuItemDto,
    });
  }

  async findAll() {
    return `This action returns all menuItems`;
  }

  async findOne(id: number) {
    return this.databaseService.menuItems.findMany({
      where: {
        restId: id,
      },
    });
  }

  async update(id: number, updateMenuItemDto: Prisma.MenuItemsUpdateInput) {
    return this.databaseService.menuItems.update({
      where: { itemId: id },
      data: updateMenuItemDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.menuItems.delete({
      where: {
        itemId: id,
      },
    });
  }
}
