import { Inject, Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { SUPPLIER_REPOSITORY } from '../../core/constants';
import { Supplier } from './entities/supplier.entity';
import { Product } from '../products/entities/product.entity';
import { Category } from '../categories/entities/category.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @Inject(SUPPLIER_REPOSITORY) private supplierRepository: typeof Supplier,
  ) {}
  async create(createSupplierDto: CreateSupplierDto): Promise<Supplier> {
    return this.supplierRepository.create<Supplier>(createSupplierDto);
  }

  async findOne(id: number): Promise<Supplier> {
    return this.supplierRepository.findOne<Supplier>({
      where: { id },
      attributes: [
        'address',
        'city',
        'country',
        'phone',
        'postalCode',
        'region',
        'contactName',
        'companyName',
        'contactTitle',
        'id',
      ],
    });
  }

  async findOneWithProducts(id: number): Promise<Supplier> {
    return this.supplierRepository.findOne<Supplier>({
      where: {
        id,
      },
      include: [
        {
          model: Product,
          attributes: ['productName', 'id'],
          include: [{ model: Category, attributes: ['categoryName', 'id'] }],
        },
      ],
    });
  }

  async deleteOne(id: number) {
    return this.supplierRepository.destroy({
      where: { id },
    });
  }
}
