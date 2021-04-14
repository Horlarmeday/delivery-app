import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersService } from './suppliers.service';
import { SUPPLIER_REPOSITORY } from '../../core/constants';
import { CreateSupplierDto } from './dto/create-supplier.dto';

describe('SuppliersService', () => {
  let service: SuppliersService;
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
  const mockSupplierRepository = {
    create: jest.fn().mockImplementation((dto) =>
      Promise.resolve({
        supplierID: 1,
        ...dto,
      }),
    ),

    findOne: jest.fn().mockReturnValue({
      supplierID: 1,
      ...createSupplierDto,
    }),

    destroy: jest.fn().mockReturnValue(Promise.resolve(1)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuppliersService,
        {
          provide: SUPPLIER_REPOSITORY,
          useValue: mockSupplierRepository,
        },
      ],
    }).compile();

    service = module.get<SuppliersService>(SuppliersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a supplier', async () => {
    expect(await service.create(createSupplierDto)).toEqual({
      supplierID: 1,
      ...createSupplierDto,
    });
    expect(mockSupplierRepository.create).toHaveBeenCalledWith(
      createSupplierDto,
    );
  });

  it('should get a supplier', async () => {
    expect(await service.findOne(1)).toEqual({
      ...createSupplierDto,
      supplierID: expect.any(Number),
    });
    expect(mockSupplierRepository.findOne).toHaveBeenCalled();
  });

  it('should get a supplier with products', async () => {
    expect(await service.findOneWithProducts(1)).toEqual({
      ...createSupplierDto,
      supplierID: expect.any(Number),
    });
  });

  it('should delete a supplier', async () => {
    expect(await service.deleteOne(1)).toEqual(1);
    expect(mockSupplierRepository.destroy).toHaveBeenCalled();
  });
});
