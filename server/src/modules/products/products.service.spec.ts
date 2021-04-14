import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { PRODUCT_REPOSITORY } from '../../core/constants';
import { GeneralHelper } from '../../common/helpers/general-helper';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductOrderDto } from './dto/product-order.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import { BadRequestException } from '@nestjs/common';

describe('ProductsService', () => {
  let service: ProductsService;

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

  const mockProductRepository = {
    create: jest.fn().mockImplementation(() =>
      Promise.resolve({
        productID: 1,
        ...createProductDto,
      }),
    ),

    findAndCountAll: jest.fn().mockReturnValue(
      Promise.resolve({
        ...productOrderDto,
      }),
    ),

    findAll: jest.fn(),

    update: jest.fn((productID, dto) => {
      return [1];
    }),

    search: jest.fn().mockReturnValue(
      Promise.resolve([
        {
          productID: 1,
          ...createProductDto,
          supplier: {},
          category: {},
        },
      ]),
    ),

    findOne: jest.fn().mockReturnValue(
      Promise.resolve({
        productID: 1,
        ...createProductDto,
        supplier: {},
        category: {},
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        GeneralHelper,
        {
          provide: PRODUCT_REPOSITORY,
          useValue: mockProductRepository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', async () => {
    expect(await service.create(createProductDto)).toEqual({
      productID: expect.any(Number),
      ...createProductDto,
    });
  });

  it('should get all paginated products', async () => {
    expect(await service.findAll(productOrderDto)).toEqual(
      expect.not.objectContaining(productOrderDto),
    );
    expect(mockProductRepository.findAndCountAll).toHaveBeenCalled();
  });

  it('should update a product', async () => {
    expect(await service.update(1, createProductDto)).toEqual([1]);
    expect(mockProductRepository.update).toHaveBeenCalled();
  });

  it('should throw error on search with no parameter', async () => {
    expect.assertions(2);
    try {
      await service.search(productQueryDto);
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
      expect(e.message).toBe(
        'Query must include one of: company name or supplier name or category name',
      );
    }
  });

  it('should get a product', async () => {
    expect(await service.findOne(1)).toEqual({
      productID: expect.any(Number),
      ...createProductDto,
      supplier: {},
      category: {},
    });
    expect(mockProductRepository.findOne).toHaveBeenCalled();
  });
});
