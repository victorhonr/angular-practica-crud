import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@ApiTags('cars') // Añadimos un tag para agrupar todas las rutas relacionadas con coches
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los coches' })
  @ApiResponse({ status: 200, description: 'Lista de coches', type: [Car] })
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un coche por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID del coche' })
  @ApiResponse({ status: 200, description: 'Coche encontrado', type: Car })
  @ApiResponse({ status: 404, description: 'Coche no encontrado' })
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo coche' })
  @ApiResponse({ status: 201, description: 'Coche creado', type: Car })
  @ApiResponse({ status: 400, description: 'Error al crear el coche' })
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un coche' })
  @ApiParam({ name: 'id', type: String, description: 'ID del coche' })
  @ApiResponse({ status: 200, description: 'Coche actualizado', type: Car })
  @ApiResponse({ status: 404, description: 'Coche no encontrado' })
  updateCar(
    @Body() updateCarDto: Partial<Car>,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un coche' })
  @ApiParam({ name: 'id', type: String, description: 'ID del coche' })
  @ApiResponse({ status: 200, description: 'Coche eliminado' })
  @ApiResponse({ status: 404, description: 'Coche no encontrado' })
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.remove(id);
  }
}
