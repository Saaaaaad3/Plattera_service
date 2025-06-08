import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MenuItemsModule } from './menu-items/menu-items.module';
import { AuthModule } from './auth/auth.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 60, // 1 minute
        limit: 200, // 200 requests per minute for authenticated users
      },
      {
        name: 'public',
        ttl: 60,
        limit: 100, // 100 requests per minute for unauthenticated users
      },
      {
        name: 'strict',
        ttl: 60,
        limit: 30, // 30 requests per minute for sensitive operations
      },
    ]),
    AuthModule,
    DatabaseModule,
    MenuItemsModule,
    RestaurantModule,
  ],
  controllers: [AppController, RestaurantController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true, // Strip properties that don't have decorators
        forbidNonWhitelisted: true, // Throw errors if non-whitelisted properties are present
        transform: true, // Transform payloads to DTO instances
        transformOptions: {
          enableImplicitConversion: true, // Automatically convert primitive types
        },
      }),
    },
    RestaurantService,
  ],
})
export class AppModule {}
