import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CodeValue {
  @ApiProperty({ description: 'Code', type: String, example: 'TOYOTA' })
  @IsString()
  @IsNotEmpty()
  readonly code: string;

  @ApiProperty({ description: 'Value', type: String, example: 'Toyota' })
  @IsString()
  @IsNotEmpty()
  readonly value: string;
}
