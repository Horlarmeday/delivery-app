import { Product } from './entities/product.entity';
import { PRODUCT_REPOSITORY } from '../../core/constants';

export const productsProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
  },
];
