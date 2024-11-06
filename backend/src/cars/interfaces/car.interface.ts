export interface Car {
  id: string;
  brand: string;
  model: string;
  total?: number;
  carDetails: {
    registrationDate: string;
    mileage: number;
    currency: string;
    price: number;
  }[];
}
