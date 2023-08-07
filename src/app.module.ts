import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [ProductsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService, OrdersService],
})
export class AppModule {}
