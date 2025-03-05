import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../ButtonComponent/button.component';
import { CarService } from '../../Services/car.service';

@Component({
  selector: 'crud-table',
  templateUrl: 'crud-table.component.html',
  styleUrl: 'crud-table.component.css',
  imports: [ButtonComponent],
})
export class CrudTableComponent {

  private carService = inject(CarService)

  ngOnInit(){
    this.loadCars()
  }

    handleCrear(){
        console.log('Creando...')
    }

    loadCars(){
      return this.carService.getCars()
    }
}
