import { Injectable } from '@nestjs/common';
import { carsDB, modelsDB } from './data/brand.data';
import { BrandDto, ModelDto } from './dto';

@Injectable()
export class BrandsService {
  // Local in-memory data for brands and models
  cars: BrandDto[] = carsDB;
  models = modelsDB;

  /**
   * Retrieves all car brands from the database.
   * @returns An array of all car brands.
   */
  getAllBrands(): BrandDto[] {
    return this.cars;
  }

  /**
   * Retrieves all models for a specific brand, given the brand's code.
   * @param brandCode - The unique code representing the car brand.
   * @returns An array of models for the given brand, or an empty array if no models are found.
   */
  getModelsByBrand(brandCode: string): ModelDto[] {
    return this.models[brandCode.toUpperCase()] || [];
  }
}
