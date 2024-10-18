import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {
  showValue: boolean = false;
  subdetails:any;
  values = [
    {
      reportType: "Evaluation Report",
      details: {
        first: "Performance Review",
        second: "Goals",
        third: "Feedback"
      }
    },
    {
      reportType: "Payroll Request",
      details: {
        first: "Salary",
        second: "Bonuses",
        third: "Deductions",
      }
    },
    {
      reportType: "Training & Development Report",
      details: {
        first: "Training Program",
        second: "Certification",
        third: "Skill Accessment"
      }
    },
    {
      reportType: "Promotion Report",
      details: {
        first: "Promotion Date",
        second: "Job Title",
        third: "New Position"
      }
    }
  ];
  onPage(head: any){
    this.showValue = true;
    this.subdetails = head.details;
  }

  closePopup(){
    this.showValue = false;
  }
}
