import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  template: '<p>successalert works!</p>',
  styles : [`
  p{
    color:green;
  }
  `]
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
