import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CATEGORY_REPOSITORY } from '../../core/constants';

describe('CategoriesService', () => {
  let categoriesService: CategoriesService;
  const createCategoryDto: CreateCategoryDto = {
    categoryName: 'Beverages',
    picture: 'base64Image',
    description: 'Drinks and beers',
  };
  const mockCategoriesRepository = {
    create: jest
      .fn()
      .mockImplementation((dto) => Promise.resolve({ id: 3, ...dto })),

    findOne: jest.fn().mockReturnValue({
      ...createCategoryDto,
      id: 1,
      products: [],
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: CATEGORY_REPOSITORY,
          useValue: mockCategoriesRepository,
        },
      ],
    }).compile();

    categoriesService = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(categoriesService).toBeDefined();
  });

  it('should create a category', async () => {
    expect(await categoriesService.create(createCategoryDto)).toEqual({
      id: expect.any(Number),
      ...createCategoryDto,
    });
    expect(mockCategoriesRepository.create).toHaveBeenCalledWith(
      createCategoryDto,
    );
  });

  it('should get a category', async () => {
    expect(await categoriesService.findOne(1)).toEqual({
      id: 1,
      ...createCategoryDto,
      products: [],
    });
    expect(mockCategoriesRepository.findOne).toHaveBeenCalled();
  });
});
