import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productName: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  supplierID: number;

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
}
