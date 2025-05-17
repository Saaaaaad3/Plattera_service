import { Controller, Get, Param } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get(':restId')
  GetAllByRestId(@Param('restId') restId: number) {
    return this.menuService.GetAllByRestId(restId);
  }
}
