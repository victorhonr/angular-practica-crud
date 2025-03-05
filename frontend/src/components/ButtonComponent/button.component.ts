import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.css',
})
export class ButtonComponent {
  @Input() insideText: string = 'Botón';
  @Input() onClick: Function = ()=>{}

  handleClick(){
    this.onClick()
  }
}
