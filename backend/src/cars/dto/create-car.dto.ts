import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CarDetailsDto {
  @ApiProperty({
    description: 'Fecha de registro del coche',
    type: String,
    example: '2024-11-01',
  })
  @IsDateString({
    strictSeparator: true,
    strict: true,
  })
  @IsNotEmpty()
  registrationDate: string;

  @ApiProperty({
    description: 'Kilometraje del coche',
    type: Number,
    example: 15000,
  })
  @IsNumber()
  @IsNotEmpty()
  mileage: number;

  @ApiProperty({
    description: 'Moneda del precio',
    type: String,
    example: 'USD',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  currency: string;

  @ApiProperty({
    description: 'Precio del coche',
    type: Number,
    example: 20000,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class CreateCarDto {
  @ApiProperty({
    description: 'Marca del coche',
    type: String,
    maxLength: 50,
    example: 'Toyota',
  })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly brand: string;

  @ApiProperty({
    description: 'Modelo del coche',
    type: String,
    maxLength: 50,
    example: 'Corolla',
  })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly model: string;

  @ApiProperty({
    description: 'Detalles del coche',
    type: [CarDetailsDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CarDetailsDto)
  readonly carDetails: CarDetailsDto[];
}
