import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): any;
    create(orderData: CreateOrderDTO): Promise<any>;
}
