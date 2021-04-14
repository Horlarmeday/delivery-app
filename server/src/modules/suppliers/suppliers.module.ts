import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { suppliersProviders } from './suppliers.providers';

@Module({
  controllers: [SuppliersController],
  providers: [SuppliersService, ...suppliersProviders],
})
export class SuppliersModule {}
