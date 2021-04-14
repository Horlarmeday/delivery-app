import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UnprocessableEntityException } from '@nestjs/common';

describe('CategoriesController', () => {
  let categoryController: CategoriesController;
  const mockCategoryService = {
    create: jest.fn((dto) => {
      return {
        categoryID: 1,
        ...dto,
      };
    }),

    findOne: jest.fn((categoryID) => {
      return {
        ...createCategoryDto,
        categoryID,
        products: [],
      };
    }),
  };
  const createCategoryDto: CreateCategoryDto = {
    categoryName: 'Beverages',
    picture: 'base64Image',
    description: 'Drinks and beers',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService],
    })
      .overrideProvider(CategoriesService)
      .useValue(mockCategoryService)
      .compile();

    categoryController = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(categoryController).toBeDefined();
  });

  it('should create a new category', async () => {
    expect(await categoryController.create(createCategoryDto)).toEqual({
      categoryID: expect.any(Number),
      ...createCategoryDto,
    });
    expect(mockCategoryService.create).toHaveBeenCalledWith(createCategoryDto);
  });

  it('should get a category', async () => {
    expect(await categoryController.findOne('1')).toEqual({
      categoryID: 1,
      ...createCategoryDto,
      products: [],
    });
    expect(mockCategoryService.findOne).toBeCalled();
  });

  it('should throw an error when categoryName or picture is not provided', async () => {
    try {
      await categoryController.create({ picture: '', categoryName: '' });
    } catch (e) {
      expect(e).toBeInstanceOf(UnprocessableEntityException);
      expect(e.message[0]).toThrowError('picture should not be empty');
    }
  });
});
