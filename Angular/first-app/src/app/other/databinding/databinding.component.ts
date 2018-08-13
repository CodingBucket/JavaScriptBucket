import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html'
})
export class DatabindingComponent implements OnInit {

  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;
  delete = false;

  constructor() { }

  ngOnInit() {
  }

  onClicked(value: string){
    alert(value);
  }

}
