import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductQueryDto } from './dto/product-query.dto';
import { ProductOrderDto } from './dto/product-order.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async findAll(
    @Query() productOrderDto: ProductOrderDto,
  ): Promise<{
    total: any;
    totalPages: number;
    perPage: number;
    currentPage: number;
    items: any;
  }> {
    return this.productsService.findAll(productOrderDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<[number, Product[]]> {
    return this.productsService.update(+id, updateProductDto);
  }

  @Get('search')
  async search(@Query() productQueryDto: ProductQueryDto): Promise<Product[]> {
    return this.productsService.search(productQueryDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(+id);
  }
}
