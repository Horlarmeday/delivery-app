import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { DatabaseModule } from '../../core/database/database.module';
import { GeneralHelper } from '../../common/helpers/general-helper';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders, GeneralHelper],
})
export class ProductsModule {}
