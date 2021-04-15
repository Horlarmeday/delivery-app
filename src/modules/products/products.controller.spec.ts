import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductOrderDto } from './dto/product-order.dto';
import { ProductQueryDto } from './dto/product-query.dto';

describe('ProductsController', () => {
  let controller: ProductsController;
  const createProductDto: CreateProductDto = {
    productName: 'Northwoods Cranberry Sauce',
    supplierID: 1002,
    categoryID: 2,
    quantityPerUnit: '12 - 12 oz jars',
    unitPrice: 21,
    unitsInStock: 27,
    unitsOnOrder: 50,
    reorderLevel: 25,
    discontinued: false,
  };
  enum ProductOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC',
  }
  const productOrderDto: ProductOrderDto = {
    page: 1,
    pageSize: 3,
    order: ProductOrderEnum.DESC,
  };

  const productQueryDto: ProductQueryDto = {
    category_name: 'Beverages',
    product_name: '',
    supplier_name: '',
  };

  const mockProductService = {
    create: jest.fn((dto: any) => {
      return {
        id: 1,
        ...dto,
      };
    }),

    findAll: jest.fn((productOrderDto) => {
      return {
        total: 3,
        items: [
          {
            id: 1,
            ...createProductDto,
            category: {},
            supplier: {},
          },
        ],
        totalPages: 1,
        perPage: productOrderDto.pageSize,
        currentPage: productOrderDto.page,
      };
    }),

    update: jest.fn((id, dto) => {
      return [1];
    }),

    search: jest.fn().mockReturnValue([
      {
        id: 1,
        ...createProductDto,
        supplier: {},
        category: {},
      },
    ]),

    findOne: jest.fn((id) => {
      return {
        id,
        ...createProductDto,
        supplier: {},
        category: {},
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    })
      .overrideProvider(ProductsService)
      .useValue(mockProductService)
      .compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a product', async () => {
    expect(await controller.create(createProductDto)).toEqual({
      id: expect.any(Number),
      ...createProductDto,
    });
    expect(mockProductService.create).toHaveBeenCalledWith(createProductDto);
  });

  it('should find all products', async () => {
    expect(await controller.findAll(productOrderDto)).toEqual({
      total: 3,
      items: [
        {
          id: 1,
          ...createProductDto,
          category: {},
          supplier: {},
        },
      ],
      totalPages: 1,
      perPage: productOrderDto.pageSize,
      currentPage: productOrderDto.page,
    });
    expect(mockProductService.findAll).toHaveBeenCalledWith(productOrderDto);
  });

  it('should update a product', async () => {
    expect(await controller.update('1', createProductDto)).toEqual([1]);
    expect(mockProductService.update).toHaveBeenCalled();
  });

  it('should search a product with query parameters', async () => {
    expect(await controller.search(productQueryDto)).toEqual([
      {
        id: 1,
        ...createProductDto,
        supplier: {},
        category: {},
      },
    ]);
    expect(mockProductService.search).toHaveBeenCalled();
  });

  it('should get a product', async () => {
    expect(await controller.findOne('1')).toEqual({
      id: expect.any(Number),
      ...createProductDto,
      supplier: {},
      category: {},
    });
    expect(mockProductService.findOne).toHaveBeenCalled();
  });
});
