import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginForm: FormGroup;

  constructor(private auth: AuthService,private route: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value);
      const usern = this.loginForm.value.username;
      const passw = this.loginForm.value.password;

      this.auth.login(usern, passw);

      if(this.auth.isLoggedIn==true){
          this.route.navigate(["/dashboard"]);
      }
  }
} 
}