import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';

describe('SuppliersController', () => {
  let controller: SuppliersController;
  const createSupplierDto: CreateSupplierDto = {
    companyName: 'Refrescos Americanas LTDA',
    contactName: 'Carlos Diaz',
    contactTitle: 'Marketing Manager',
    address: 'Av. Das Americanas 12.890',
    city: 'Sao Paolo',
    region: '',
    postalCode: '5442',
    country: 'Brazil',
    phone: '(11) 555 4640',
    fax: '',
    homePage: '#FORMAGGI.HTM #',
  };
  const mockSupplierService = {
    create: jest.fn((dto) => {
      return {
        supplierID: 1,
        ...dto,
      };
    }),
    findOne: jest.fn((supplierID) => {
      return {
        supplierID,
        ...createSupplierDto,
      };
    }),
    findOneWithProducts: jest.fn((supplierID) => {
      return {
        supplierID,
        ...createSupplierDto,
        products: [],
      };
    }),
    remove: jest.fn((supplierID) => {
      return [1];
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppliersController],
      providers: [SuppliersService],
    })
      .overrideProvider(SuppliersService)
      .useValue(mockSupplierService)
      .compile();

    controller = module.get<SuppliersController>(SuppliersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a supplier', async () => {
    expect(await controller.create(createSupplierDto)).toEqual({
      ...createSupplierDto,
      supplierID: expect.any(Number),
    });
  });

  it('should get a supplier', async () => {
    expect(await controller.findOne('1')).toEqual({
      ...createSupplierDto,
      supplierID: expect.any(Number),
    });
  });

  it('should get a supplier with products', async () => {
    expect(await controller.findOneWithProducts('1')).toEqual({
      ...createSupplierDto,
      supplierID: expect.any(Number),
      products: [],
    });
  });
});
