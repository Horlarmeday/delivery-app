import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly productName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly supplierID: number;

  @IsNotEmpty()
  @IsNumber()
  readonly categoryID: number;

  @IsNotEmpty()
  @IsString()
  readonly quantityPerUnit: string;

  @IsNotEmpty()
  @IsNumber()
  readonly unitPrice: number;

  @IsNotEmpty()
  @IsNumber()
  readonly unitsInStock: number;

  @IsNotEmpty()
  @IsNumber()
  readonly unitsOnOrder: number;

  @IsNotEmpty()
  @IsNumber()
  readonly reorderLevel: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly discontinued: boolean;
}
