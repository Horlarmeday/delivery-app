import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { Supplier } from './entities/supplier.entity';
import { ResponseInterceptor } from '../../core/interceptors/response.interceptors';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @UseInterceptors(ResponseInterceptor)
  @Post()
  async create(
    @Body() createSupplierDto: CreateSupplierDto,
  ): Promise<Supplier> {
    return this.suppliersService.create(createSupplierDto);
  }

  @UseInterceptors(ResponseInterceptor)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Supplier> {
    return this.suppliersService.findOne(+id);
  }

  @UseInterceptors(ResponseInterceptor)
  @Get(':id/products')
  async findOneWithProducts(@Param('id') id: string) {
    return this.suppliersService.findOneWithProducts(+id);
  }

  @UseInterceptors(ResponseInterceptor)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.suppliersService.deleteOne(+id);
  }
}
