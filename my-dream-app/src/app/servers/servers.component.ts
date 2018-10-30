import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 // selector:'[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "Server was not created";
  username ="";
  constructor() {
    setTimeout(() => {
         this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created and Name  is " +this.username;
  }

  isEmptyInput(){
    if(this.username == ""|| this.username == null){
      return true;
    }else {
      return false;
    }
  }

  onSubmitClick(){
    this.username ="";
  }

  onUpdateUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

}
