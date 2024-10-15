import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn: boolean = false;
  validUsername: string = "NeerajMeka";
  validPassword: string = "123";

  login(username:string, password:string){
    if(username==this.validUsername && password==this.validPassword){
      this.isLoggedIn=true;
      console.log("Login Successful");
      
    }
    else{
      this.isLoggedIn = false;
      console.log("Login Unsuccessful")
    }
  }

  loggedOut(){
    this.isLoggedIn = false;
  }

  isAuth(){
    return this.isLoggedIn;
  }
}
