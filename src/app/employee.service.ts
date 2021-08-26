import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
// import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/employees';
  employee = new Employee();
  constructor(private http: HttpClient) {}

  takeVacation(id: number, value: any): Observable<any> {
     return this.http.get(`${this.baseUrl}/${id}/takevacation?vacationDays=${value}`);
  }

  work(id: number, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/work?daysWorked=${value}`);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
