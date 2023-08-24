import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): any;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        price: number;
        description: string;
        image: string;
        additionalImages: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
