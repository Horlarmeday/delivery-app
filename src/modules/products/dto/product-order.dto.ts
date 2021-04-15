import { IsEnum, IsOptional } from 'class-validator';

enum ProductOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class ProductOrderDto {
  readonly page?: number;
  readonly pageSize?: number;

  @IsEnum(ProductOrderEnum, {
    message: 'order must be either ASC or DESC',
  })
  @IsOptional()
  readonly order? = ProductOrderEnum.DESC;
}
