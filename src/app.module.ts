import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { DatabaseModule } from './database/database.module';
import { MenuItemsModule } from './menu-items/menu-items.module';

@Module({
  imports: [MenuModule, DatabaseModule, MenuItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
