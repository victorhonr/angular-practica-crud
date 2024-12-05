import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BrandsService } from './brands.service';

@ApiTags('brands') // Tag to group all routes related to brands
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all car brands' })
  @ApiResponse({
    status: 200,
    description: 'List of car brands',
    type: [String],
  })
  getAllBrands() {
    return this.brandsService.getAllBrands();
  }

  @Get(':brandId/models')
  @ApiOperation({ summary: 'Get models by car brand' })
  @ApiResponse({
    status: 200,
    description: 'List of models for the specified brand',
    type: [String],
  })
  getModelsByBrand(@Param('brandId') brandId: string) {
    return this.brandsService.getModelsByBrand(brandId);
  }
}
