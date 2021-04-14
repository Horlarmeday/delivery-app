import {
  AutoIncrement,
  Column,
  DataType,
  DefaultScope,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';
@DefaultScope(() => ({
  attributes: { exclude: ['createdAt', 'updatedAt', 'homePage', 'fax'] },
}))
@Table
export class Supplier extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

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
    get(): unknown {
      return {
        city: this.getDataValue('city'),
        country: this.getDataValue('country'),
        phone: this.getDataValue('phone'),
        postalCode: this.getDataValue('postalCode'),
        region: this.getDataValue('region'),
        street: this.getDataValue('address'),
      };
    },
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
