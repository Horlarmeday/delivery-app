import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsNotEmpty()
  @IsString()
  readonly companyName: string;

  @IsNotEmpty()
  @IsString()
  readonly contactName: string;

  @IsNotEmpty()
  @IsString()
  readonly contactTitle: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  readonly city: string;

  @IsOptional()
  @IsString()
  readonly region?: string;

  @IsNotEmpty()
  @IsString()
  readonly postalCode: string;

  @IsNotEmpty()
  @IsString()
  readonly country: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsOptional()
  @IsString()
  readonly fax?: string;

  @IsOptional()
  @IsString()
  readonly homePage?: string;
}
