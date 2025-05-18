import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MenuItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createMenuItemDto: Prisma.MenuItemsCreateInput) {
    return 'This action adds a new menuItem';
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
    return `This action updates a #${id} menuItem`;
  }

  async remove(id: number) {
    return `This action removes a #${id} menuItem`;
  }
}
