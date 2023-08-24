"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_interceptor_1 = require("./shared/interceptors/logger.interceptor");
const prisma_service_1 = require("./shared/services/prisma/prisma.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new logger_interceptor_1.LoggerInterceptor());
    app.setGlobalPrefix('api');
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map