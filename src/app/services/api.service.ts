import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private registeredDataSubject = new BehaviorSubject<any[]>([]);
  registeredData$ = this.registeredDataSubject.asObservable();

  constructor(private http: HttpClient) {}
  employeeId: any[] = [];

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getValue() {
    return this.registeredDataSubject.asObservable();
  }

  updateEmployeeData(newData: any[]) {
    this.registeredDataSubject.next(newData);
  }

  deleteValue(empData: any){
    let newEmp: any[] = this.registeredDataSubject.getValue();
    let empId = empData.id;
    newEmp = newEmp.filter(data=> data.id !== empId);
    
    this.registeredDataSubject.next(newEmp);
  }
}





















/*User():Observable<any>{
      return this.http.get<any>(this.url);
    }
    addData(newData: any): Observable<any> {
      return this.http.post<any>(this.url, newData);
    }*/
