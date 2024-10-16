import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  eData : any[] = [];
  ngOnInit(): void {
    this.api.registeredData$.subscribe(data => {
      this.eData = Array.isArray(data) ? data : [];
      console.log('Registered Data:', this.eData);
    });

    this.api.getUserData().subscribe(
      data => {
        this.api.updateRegisteredData(data);
      },
      error => console.error('Error fetching user data:', error)
    );
  }
  employeeForm: FormGroup;
  
  constructor(private userData: ApiService,private api: ApiService) {
    this.employeeForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
    });
  }


  onAdd(){
    const formValue = this.employeeForm.value;
    const newUser = {
      id: formValue.id,
      name: formValue.name,
      email: formValue.email,
      address: {
        street: '',
        suite: '',
        city: formValue.address,
        zipcode: ''
      }
    };
    this.api.updateRegisteredData([...this.eData, newUser]);
    console.log(this.employeeForm.value)
    this.employeeForm.reset();
    
  }

  // newData: any;
  // onAdd(){
  //     this.newData = this.employeeForm.value;
  //     this.api.addData(this.newData).subscribe(
  //       (response) => {
  //         console.log('Data added:', response);
  //         this.eData.push(response); 
  //         this.newData = {};
  //       },
  //       (error) => {
  //         console.error('Error adding data:', error);
  //       }
  //     );
  // }
}

















/*
  api.User().subscribe((data)=>{
      this.eData = data;
      console.log(data);
    });
*/