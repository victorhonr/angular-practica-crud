import { ApiProperty } from '@nestjs/swagger';

class CarDetail {
  @ApiProperty({ description: 'Fecha de registro del coche', type: String })
  registrationDate: string;

  @ApiProperty({ description: 'Kilometraje del coche', type: Number })
  mileage: number;

  @ApiProperty({ description: 'Moneda del precio', type: String })
  currency: string;

  @ApiProperty({ description: 'Precio del coche', type: Number })
  price: number;
}

export class Car {
  @ApiProperty({ description: 'ID del coche', type: String })
  id: string;

  @ApiProperty({ description: 'Marca del coche', type: String })
  brand: string;

  @ApiProperty({ description: 'Modelo del coche', type: String })
  model: string;

  @ApiProperty({
    description: 'Total del coche (opcional)',
    type: Number,
    required: false,
  })
  total?: number;

  @ApiProperty({
    description: 'Detalles del coche',
    type: [CarDetail],
  })
  carDetails: CarDetail[];
}
