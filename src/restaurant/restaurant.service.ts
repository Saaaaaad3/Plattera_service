import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class RestaurantService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getRestaurantById(restId: number) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { restId },
      include: {
        user: {
          select: {
            userName: true,
          },
        },
        categories: true,
      },
    });

    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID ${restId} not found`);
    }

    return restaurant;
  }
}
