import { PrismaService } from '../../src/shared/services/prisma/prisma.service';
import { CreateOrderDTO } from './dto/create-order.dto';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(orderData: CreateOrderDTO): Promise<any>;
    getAll(): Promise<any[]>;
}
