import { Component } from '@angular/core';
import { CrudTableComponent } from '../CrudTable/crud-table.component';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  imports: [CrudTableComponent],
})
export class HomeComponent {}
