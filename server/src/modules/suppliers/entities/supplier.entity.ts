import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';

export class Supplier extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  supplierID: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  companyName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contactName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contactTitle: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING,
  })
  region: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  postalCode: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  fax: string;

  @Column({
    type: DataType.STRING,
  })
  homePage: string;

  @HasMany(() => Product)
  products: Product;
}
