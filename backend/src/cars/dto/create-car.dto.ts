import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
  Max,
  Min,
  Validate,
  ValidateNested,
} from 'class-validator';
import { CodeValue } from 'src/brands/dto';
import { ISO_CURRENCIES_CODE } from '../data/iso-currencies.data';
import { IsBeforeConstraint } from '../validators/isBefore.validator';
import { IsValidYearConstraint } from '../validators/isValidYear.validator';

const licensePlateRegex = /^[0-9]{4}\s?[A-Z]{3}$/;

export class CarDetailsDto {
  @ApiProperty({
    description: 'Car registration date',
    type: String,
    example: '2024-10-30T10:01:35.288Z',
  })
  @IsDateString({
    strictSeparator: true,
    strict: true,
  })
  @IsNotEmpty()
  @Validate(IsBeforeConstraint)
  @Validate(IsValidYearConstraint, {
    message: 'Car registration year must be greater than or equal to 1900',
  })
  registrationDate: string;

  @ApiProperty({
    description: 'Car mileage',
    type: Number,
    example: 15000,
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  mileage: number;

  @ApiProperty({
    description: 'Currency of the price',
    enum: ISO_CURRENCIES_CODE,
    example: 'USD',
  })
  @IsString()
  @IsNotEmpty()
  @IsIn(ISO_CURRENCIES_CODE, {
    message: `Currency must be a valid ISO 4217 code from the supported list: ${ISO_CURRENCIES_CODE}`,
  })
  currency: string;

  @ApiProperty({
    description: 'Price of the car',
    type: Number,
    example: 20000,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Year of manufacture of the car',
    type: Number,
    example: 2020,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(1900, {
    message: 'Manufacture year must be greater than or equal to 1900',
  })
  @Max(new Date().getFullYear(), {
    message: `Manufacture year cannot be greater than the current year`,
  })
  manufactureYear: number;

  @ApiProperty({
    description: 'Indicates if the car is available for sale',
    type: Boolean,
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  availability: boolean;

  @ApiProperty({
    description: 'Car license plate',
    type: String,
    example: '1234 ABC',
  })
  @IsString()
  @Matches(licensePlateRegex, {
    message:
      'Car license plate must be a valid Spanish license plate, e.g. 1234 ABC.',
  })
  @IsNotEmpty()
  readonly licensePlate: string;
}

export class CreateCarDto {
  @ApiProperty({
    description: 'Car brand',
    type: CodeValue,
    example: { code: 'TOYOTA', value: 'Toyota' },
  })
  @ValidateNested()
  @Type(() => CodeValue)
  @IsNotEmpty()
  readonly brand: CodeValue;

  @ApiProperty({
    description: 'Car model',
    type: CodeValue,
    example: { code: 'COROLLA', value: 'Corolla' },
  })
  @ValidateNested()
  @Type(() => CodeValue)
  @IsNotEmpty()
  readonly model: CodeValue;

  @ApiProperty({
    description: 'Car details',
    type: [CarDetailsDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CarDetailsDto)
  @IsOptional()
  readonly carDetails?: CarDetailsDto[];
}
