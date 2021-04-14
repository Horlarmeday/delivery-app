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
  attributes: { exclude: ['createdAt', 'updatedAt'] },
}))
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
    type: DataType.TEXT,
    allowNull: false,
  })
  picture: string;

  @HasMany(() => Product)
  products: Product;

  // public static of(params: Partial<Category>): Category {
  //   const category = new Category();
  //
  //   Object.assign(category, params);
  //
  //   return category;
  // }
}
//
// export class CategoryRepositoryFake {
//   public async createOne(): Promise<void> {}
//
//   public async findOne(): Promise<void> {}
// }
