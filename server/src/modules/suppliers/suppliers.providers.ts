import { SUPPLIER_REPOSITORY } from '../../core/constants';
import { Supplier } from './entities/supplier.entity';

export const suppliersProviders = [
  {
    provide: SUPPLIER_REPOSITORY,
    useValue: Supplier,
  },
];
