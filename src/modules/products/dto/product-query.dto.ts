import { IsOptional, IsString, ValidateIf } from 'class-validator';

export class ProductQueryDto {
  @ValidateIf((o) => (!o.category_name && !o.supplier_name) || o.product_name)
  @IsString()
  @IsOptional()
  product_name: string;

  @ValidateIf((o) => (!o.product_name && !o.supplier_name) || o.category_name)
  @IsString()
  @IsOptional()
  category_name: string;

  @ValidateIf((o) => (!o.product_name && !o.category_name) || o.supplier_name)
  @IsString()
  @IsOptional()
  supplier_name: string;
}
