import { Component } from '@angular/core';
import { ButtonComponent } from '../ButtonComponent/button.component';

@Component({
  selector: 'crud-table',
  templateUrl: 'crud-table.component.html',
  styleUrl: 'crud-table.component.css',
  imports: [ButtonComponent],
})
export class CrudTableComponent {
    handleCrear(){
        console.log('Creando...')
    }
}
