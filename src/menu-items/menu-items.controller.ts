import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { MenuItemsService } from './menu-items.service';
import { CreateMenuItemDto, UpdateMenuItemDto } from './dto/menu-item.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/guards/roles.guard';

@Controller('menu-items')
export class MenuItemsController {
  constructor(private readonly menuItemsService: MenuItemsService) {}

  // Public endpoints - no auth needed
  @Get()
  @Throttle({ public: { limit: 60, ttl: 60 } }) // 60 requests per minute for unauthenticated users
  findAll() {
    return this.menuItemsService.findAll();
  }

  @Get('GetMenuItemsByRestId/:id')
  @Throttle({ public: { limit: 120, ttl: 60 } }) // 120 requests per minute for unauthenticated users
  findOne(@Param('id') id: string) {
    return this.menuItemsService.findOne(+id);
  }

  // Protected endpoints - requires RESTOWNER role
  @Post('AddNewMenuItem')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('RESTOWNER')
  @Throttle({ default: { limit: 30, ttl: 60 } }) // 30 requests per minute for authenticated users
  create(@Body() createMenuItemDto: CreateMenuItemDto, @Request() req) {
    return this.menuItemsService.create(createMenuItemDto, req.user.sub);
  }

  @Patch('UpdateMenuItem/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('RESTOWNER')
  @Throttle({ default: { limit: 60, ttl: 60 } }) // 60 requests per minute for authenticated users
  update(
    @Param('id') id: string,
    @Body() updateMenuItemDto: UpdateMenuItemDto,
    @Request() req,
  ) {
    return this.menuItemsService.update(+id, updateMenuItemDto, req.user.sub);
  }

  @Delete('RemoveMenuItem/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('RESTOWNER')
  @Throttle({ strict: { limit: 20, ttl: 60 } }) // 20 requests per minute for sensitive operations
  remove(@Param('id') id: string, @Request() req) {
    return this.menuItemsService.remove(+id, req.user.sub);
  }
}
