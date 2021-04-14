import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CATEGORY_REPOSITORY } from '../../core/constants';
import { Category } from './entities/category.entity';
import { Product } from '../products/entities/product.entity';
import { Supplier } from '../suppliers/entities/supplier.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CATEGORY_REPOSITORY)
    private readonly categoryRepository: typeof Category,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryRepository.create<Category>(createCategoryDto);
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne<Category>({
      where: { categoryID: id },
      include: [
        {
          model: Product,
          include: [{ model: Supplier }],
        },
      ],
    });
    if (!category) throw new NotFoundException('No Category Found');

    return category;
  }
}
