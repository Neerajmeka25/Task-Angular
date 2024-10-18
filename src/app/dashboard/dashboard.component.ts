import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  empData : any[] = [];

  delEmployeeId : any[] = [];
  
  showSpan: boolean = false;
  
  employeeForm: FormGroup;
  
  imageUrl = '../../assets/bin.png';

  constructor(private userData: ApiService,private api: ApiService) {
    this.employeeForm = new FormGroup({
      id: new FormControl(null , [Validators.required]),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required,Validators.email]),
      address: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.api.employeeData$.subscribe(data => {
      this.empData = Array.isArray(data) ? data : [];
    });

    this.api.getUserData().subscribe(
      data => {
        this.api.updateEmployeeData(data);
      },
      error => console.error('Error fetching user data:', error)
    );
  }

  onAdd(){
    if(this.employeeForm.valid){
      const formValue = this.employeeForm.value;
      const newId = formValue.id;
      let existingId = this.empData.some((data)=> data.id === newId);
      let existingDelId = this.delEmployeeId.includes(newId); 
      if (existingId || existingDelId) {
        //alert('This ID cannot be added again. Please use a different ID.');
        console.log("This ID cannot be added again. Please use a different ID.");
        this.showSpan = true;
        
        return ;
      }
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
      this.api.updateEmployeeData([...this.empData, newUser]);
      console.log(this.employeeForm.value)
      this.employeeForm.reset();
    }
  }


  deleteEmp(empData: any){
    this.delEmployeeId.push(empData.id);
    this.api.deleteValue(empData);
  }

  onIdChange() {
    this.showSpan = false; 
  }

}

















/*
  api.User().subscribe((data)=>{
      this.eData = data;
      console.log(data);
    });
*/