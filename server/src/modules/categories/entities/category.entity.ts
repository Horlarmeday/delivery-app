import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';

@Table
export class Category extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryID: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categoryName: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.BLOB,
    allowNull: false,
  })
  picture: string;

  @HasMany(() => Product)
  products: Product;
}
