import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { Supplier } from './entities/supplier.entity';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  async create(
    @Body() createSupplierDto: CreateSupplierDto,
  ): Promise<Supplier> {
    return this.suppliersService.create(createSupplierDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Supplier> {
    return this.suppliersService.findOne(+id);
  }

  @Get(':id/products')
  async findOneWithProducts(@Param('id') id: string) {
    return this.suppliersService.findOneWithProducts(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.suppliersService.deleteOne(+id);
  }
}
