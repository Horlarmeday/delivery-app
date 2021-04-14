import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PRODUCT_REPOSITORY } from '../../core/constants';
import { Product } from './entities/product.entity';
import { Category } from '../categories/entities/category.entity';
import { Supplier } from '../suppliers/entities/supplier.entity';
import { GeneralHelper } from '../../common/helpers/general-helper';
import { ProductQueryDto } from './dto/product-query.dto';
import { Op } from 'sequelize';
import { ProductOrderDto } from './dto/product-order.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private productRepository: typeof Product,
    private readonly generalHelper: GeneralHelper,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.create<Product>(createProductDto);
  }

  async findAll(
    productOrderDto: ProductOrderDto,
  ): Promise<{
    total: any;
    totalPages: number;
    perPage: number;
    currentPage: number;
    items: any;
  }> {
    const { page, pageSize, order } = productOrderDto;

    const { limit, offset } = this.generalHelper.getPagination(
      +page,
      +pageSize,
    );

    const products = await this.productRepository.findAndCountAll<Product>({
      limit: limit,
      offset: offset,
      include: [
        { model: Category, order: [['id', order]] },
        {
          model: Supplier,
        },
      ],
    });
    return this.generalHelper.getPaginationData(products, page, limit);
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<[number, Product[]]> {
    return await this.productRepository.update(updateProductDto, {
      where: { productID: id },
    });
  }

  async search(productQueryDto: ProductQueryDto): Promise<Product[]> {
    const { product_name, category_name, supplier_name } = productQueryDto;

    if (!product_name || !category_name || !supplier_name)
      throw new BadRequestException(
        'Query must include one of: company name or supplier name or category name',
      );

    if (product_name) {
      return await this.filterByProductName(product_name);
    }

    if (category_name) {
      return await this.filterByCategoryName(category_name);
    }

    if (supplier_name) {
      return await this.filterBySupplierName(supplier_name);
    }
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne({
      where: { productID: id },
      include: [
        { model: Category },
        {
          model: Supplier,
        },
      ],
    });
  }

  private async filterByProductName(product_name) {
    return await this.productRepository.findAll<Product>({
      where: {
        productName: {
          [Op.like]: `%${product_name}%`,
        },
      },
      include: [
        { model: Category },
        {
          model: Supplier,
        },
      ],
    });
  }

  private async filterByCategoryName(category_name) {
    return await this.productRepository.findAll<Product>({
      include: [
        {
          model: Category,
          where: { categoryName: { [Op.like]: `%${category_name}%` } },
        },
        {
          model: Supplier,
        },
      ],
    });
  }

  private async filterBySupplierName(supplier_name) {
    return await this.productRepository.findAll<Product>({
      include: [
        { model: Category },
        {
          model: Supplier,
          where: {
            companyName: { [Op.like]: `%${supplier_name}%` },
          },
        },
      ],
    });
  }
}
