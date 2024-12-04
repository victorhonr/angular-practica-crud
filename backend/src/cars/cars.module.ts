import { Module } from '@nestjs/common';
import { BrandsModule } from 'src/brands/brands.module';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService],
  imports: [BrandsModule],
})
export class CarsModule {}
