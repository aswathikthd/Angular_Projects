import { Component } from "@angular/core";

@Component({
selector: 'app-server',
templateUrl :'./server.component.html',
styles: [`
.online{
    color:white;
}
`]
})

export class ServerComponent {
    serverName = "This is the server component";
    serverContent =['Test','Test1'];
    serverStatus = false;
 
    onServerCreated(){
        this.serverStatus = !this.serverStatus;
        this.serverContent.push(this.serverName);
    }
    getColor(index){
       return index > 4 ?'blue' : 'none'
    }
  }