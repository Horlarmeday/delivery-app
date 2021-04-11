import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Supplier } from '../../suppliers/entities/supplier.entity';
import { Category } from '../../categories/entities/category.entity';

@Table
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productID: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productName: string;

  @ForeignKey(() => Supplier)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  supplierID: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryID: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  quantityPerUnit: string;

  @Column({
    type: DataType.DECIMAL(15, 4),
    allowNull: false,
  })
  unitPrice: number;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  unitInStock: number;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  unitsOnOrder: number;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  reorderLevel: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  discontinued: boolean;

  @BelongsTo(() => Supplier)
  supplier: Supplier;

  @BelongsTo(() => Category)
  category: Category;
}
