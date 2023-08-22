import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/shared/services/prisma/prisma.service';
import { CreateOrderDTO } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(orderData: CreateOrderDTO): Promise<any> {
    const { productId, client, address } = orderData;

    return this.prismaService.order.create({
      data: {
        client,
        address,
        product: { connect: { id: productId } }, // Connect with the specified product
      },
    });
  }
}
