import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuItemsService } from './menu-items.service';
import { Prisma } from 'generated/prisma';

@Controller('menu-items')
export class MenuItemsController {
  constructor(private readonly menuItemsService: MenuItemsService) {}

  @Post('AddNewMenuItem')
  create(@Body() createMenuItemDto: Prisma.MenuItemsCreateInput) {
    return this.menuItemsService.create(createMenuItemDto);
  }

  @Get()
  findAll() {
    return this.menuItemsService.findAll();
  }

  @Get('GetMenuItemsByRestId/:id')
  findOne(@Param('id') id: string) {
    return this.menuItemsService.findOne(+id);
  }

  @Patch('UpdateMenuItem/:id')
  update(
    @Param('id') id: string,
    @Body() updateMenuItemDto: Prisma.MenuItemsUpdateInput,
  ) {
    return this.menuItemsService.update(+id, updateMenuItemDto);
  }

  @Delete('RemoveMenuItem/:id')
  remove(@Param('id') id: string) {
    return this.menuItemsService.remove(+id);
  }
}
