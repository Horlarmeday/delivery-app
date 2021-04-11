import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Category extends Model {
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
}
