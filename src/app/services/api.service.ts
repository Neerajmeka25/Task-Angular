import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private registeredDataSubject = new BehaviorSubject<any[]>([]);
  registeredData$ = this.registeredDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateRegisteredData(newData: any[]) {
    this.registeredDataSubject.next(newData);
  }
}





















/*User():Observable<any>{
      return this.http.get<any>(this.url);
    }
    addData(newData: any): Observable<any> {
      return this.http.post<any>(this.url, newData);
    }*/
