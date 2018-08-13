import { Component, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click Me</button>
  `,
})
export class EventBindingComponent {
  @Output('clickable') clicked = new EventEmitter<string>(); 

  onClicked(){
    //alert('It Worked!');
    this.clicked.emit('It Worked!');
  }

}
