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
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductQueryDto } from './dto/product-query.dto';
import { ProductOrderDto } from './dto/product-order.dto';
import { ResponseInterceptor } from '../../core/interceptors/response.interceptors';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseInterceptors(ResponseInterceptor)
  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @UseInterceptors(ResponseInterceptor)
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

  @UseInterceptors(ResponseInterceptor)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<[number, Product[]]> {
    return this.productsService.update(+id, updateProductDto);
  }

  @UseInterceptors(ResponseInterceptor)
  @Get('search')
  async search(@Query() productQueryDto: ProductQueryDto): Promise<Product[]> {
    return this.productsService.search(productQueryDto);
  }

  @UseInterceptors(ResponseInterceptor)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(+id);
  }
}
