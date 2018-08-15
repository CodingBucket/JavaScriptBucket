import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle works!
    </p>
  `
})
export class LifecycleComponent implements OnInit {

  constructor() {
  }

  ngOnChanges() { 
      this.log('ngOnChanges');
  }

  ngOnInit() {
      this.log('1. ngOnInit');
      //console.log(this.boundContent);
  }

  ngDoCheck() {
      this.log('2. ngDoCheck');
  }

  ngAfterContentInit() {
      this.log('3. ngAfterContentInit');
  }

  ngAfterContentChecked() {
      this.log('4. ngAfterContentChecked');
  }

  ngAfterViewInit() {
      this.log('5. ngAfterViewInit');
  }

  ngAfterViewChecked() {
      this.log('6. ngAfterViewChecked');
  }

  ngOnDestroy() {
      this.log('7. ngOnDestroy');
  }

  private log(hook: string) {
      console.log(hook);
  }

}
