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
  @IsDateString({
    strictSeparator: true,
    strict: true,
  })
  @IsNotEmpty()
  registrationDate: string;

  @IsNumber()
  @IsNotEmpty()
  mileage: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  currency: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class CreateCarDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly model: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CarDetailsDto)
  readonly carDetails: CarDetailsDto[];
}
