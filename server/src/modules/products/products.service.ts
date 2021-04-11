import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PRODUCT_REPOSITORY } from '../../core/constants';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private productRepository: typeof Product,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.create<Product>(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll<Product>();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne({ where: { productID: id } });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<[number, Product[]]> {
    return await this.productRepository.update(updateProductDto, {
      where: { productID: id },
    });
  }

  async search(searchString: string): Promise<Product[]> {
    return await this.productRepository.findAll<Product>({
      where: {
        productName: `%${searchString}%`,
      },
    });
  }
}
