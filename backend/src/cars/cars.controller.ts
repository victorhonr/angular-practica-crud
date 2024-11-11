import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto';
import { Car, CarSummary } from './entities';

@ApiTags('cars') // Tag to group all routes related to cars
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all cars' })
  @ApiResponse({ status: 200, description: 'List of cars', type: [CarSummary] })
  getAllCars(): CarSummary[] {
    return this.carsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a car by ID' })
  @ApiParam({ name: 'id', type: String, description: 'Car ID' })
  @ApiResponse({ status: 200, description: 'Car found', type: Car })
  @ApiResponse({ status: 404, description: 'Car not found' })
  getCarById(@Param('id', ParseUUIDPipe) id: string): Car {
    return this.carsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new car' })
  @ApiResponse({ status: 201, description: 'Car created', type: Car })
  @ApiResponse({ status: 400, description: 'Error creating car' })
  createCar(@Body() createCarDto: CreateCarDto): Car {
    return this.carsService.create(createCarDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a car' })
  @ApiParam({ name: 'id', type: String, description: 'Car ID' })
  @ApiResponse({ status: 200, description: 'Car updated', type: Car })
  @ApiResponse({ status: 404, description: 'Car not found' })
  updateCar(
    @Body() carToUpdate: CreateCarDto,
    @Param('id', ParseUUIDPipe) id: string,
  ): Car {
    return this.carsService.update(id, carToUpdate);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a car' })
  @ApiParam({ name: 'id', type: String, description: 'Car ID' })
  @ApiResponse({ status: 200, description: 'Car deleted' })
  @ApiResponse({ status: 404, description: 'Car not found' })
  deleteCar(@Param('id', ParseUUIDPipe) id: string): Car {
    return this.carsService.remove(id);
  }
}
