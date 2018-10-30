import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  template: '<p>warningalert works!</p>',
  styles : [`
  p{
    color:red;
  }
  `]
})
export class WarningalertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
