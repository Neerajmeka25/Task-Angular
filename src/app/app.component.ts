import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  navList = ["home","dashboard","contact","about","insights","logout"];

  constructor(private route: Router, private auth: AuthService){ }
  navigate(data: string){
    if(data=="logout"){
      this.auth.loggedOut();
      this.route.navigate([""]);
    }
    else{
      this.route.navigate([data]);
    }
    
  }
}
