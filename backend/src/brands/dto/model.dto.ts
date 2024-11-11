import { ApiProperty } from '@nestjs/swagger';
import { CodeValue } from './code-value.dto';

export class ModelDto implements CodeValue {
  @ApiProperty({
    description: 'Car model code',
    example: 'COROLLA',
  })
  code: string;

  @ApiProperty({
    description: 'Car model name',
    example: 'Corolla',
  })
  value: string;
}
