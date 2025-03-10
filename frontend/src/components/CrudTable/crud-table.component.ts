import { Component, inject } from '@angular/core';
import { CarService } from '../../Services/car.service';
import { Field } from '../../types/Field';

@Component({
  selector: 'crud-table',
  templateUrl: 'crud-table.component.html',
  styleUrl: 'crud-table.component.css',
})
export class CrudTableComponent {
  private carService = inject(CarService);
  fields: Field[] = [
    { name: 'ID', value: 'id' },
    { name: 'Marca', value: 'brand' },
    { name: 'Modelo', value: 'model' },
    { name: 'Total', value: 'total' },
    { name: 'Acciones', value: 'actions' },
  ];
  carList: any = [];

  ngOnInit() {
    this.carService.getCars().subscribe((res) => {
      this.carList = res;
    });
  }

  ngOnChanges() {
    console.log(this.carList);
  }

  handleCrear(): void {
    console.log('Creando...');
  }
}
