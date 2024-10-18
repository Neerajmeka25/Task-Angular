import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private employeeDataSubject = new BehaviorSubject<any[]>([]);
  employeeData$ = this.employeeDataSubject.asObservable();

  constructor(private http: HttpClient) {}
  employeeId: any[] = [];

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getValue() {
    return this.employeeDataSubject.asObservable();
  }

  updateEmployeeData(newData: any[]) {
    this.employeeDataSubject.next(newData);
  }

  deleteValue(empData: any){
    let newEmp: any[] = this.employeeDataSubject.getValue();
    let empId = empData.id;
    newEmp = newEmp.filter(data=> data.id !== empId);
    
    this.employeeDataSubject.next(newEmp);
  }
}





















/*User():Observable<any>{
      return this.http.get<any>(this.url);
    }
    addData(newData: any): Observable<any> {
      return this.http.post<any>(this.url, newData);
    }*/
