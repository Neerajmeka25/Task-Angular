import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employeeForm: FormGroup;
  eData : any;
  constructor(private userData: ApiService,private api: ApiService) {
    this.employeeForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
    });

    api.User().subscribe((data)=>{
      this.eData = data;
      console.log(data);
    });
    
  }
  onAdd(){
    console.log(this.employeeForm.value)
  }
}
