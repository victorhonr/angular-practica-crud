import { Injectable } from '@nestjs/common';
import { brandsDB, modelsDB } from './data/brand.data';

@Injectable()
export class BrandsService {
  // Local in-memory data for brands and models
  brands: string[] = brandsDB;
  models = modelsDB;

  /**
   * Retrieves all car brands from the database.
   * @returns An array of all car brands.
   */
  getAllBrands(): string[] {
    return this.brands;
  }

  /**
   * Retrieves all models for a specific brand, given the brand's code.
   * @param brandCode - The unique code representing the car brand.
   * @returns An array of models for the given brand, or an empty array if no models are found.
   */
  getModelsByBrand(brandCode: string): string[] {
    return this.models[brandCode.toUpperCase()] || [];
  }
}
