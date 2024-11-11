// dto/get-car-brands.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { CodeValue } from './code-value.dto';

export class BrandDto implements CodeValue {
  @ApiProperty({
    description: 'Car brand code',
    example: 'TOYOTA',
  })
  code: string;

  @ApiProperty({
    description: 'Car brand name',
    example: 'Toyota',
  })
  value: string;
}
