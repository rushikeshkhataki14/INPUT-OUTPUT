import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communication';

  name= "rushi";
  message="";

  receivedMessage (msg:string){
    this.message = msg;
  }
}
