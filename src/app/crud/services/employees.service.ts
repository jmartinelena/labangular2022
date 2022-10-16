import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeResponse } from '../models/EmployeeResponse';
import { EmployeeRequest } from '../models/EmployeeRequest';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apiUrl: string = environment.apiEmployees;

  constructor(private http: HttpClient) { }

  public getEmployees() : Observable<Array<EmployeeResponse>>{
    let url = this.apiUrl + 'Employees/';
    return this.http.get<Array<EmployeeResponse>>(url);
  }

  public getEmployee(id: string) : Observable<EmployeeResponse> {
    let url = this.apiUrl + 'Employees/' + id;
    return this.http.get<EmployeeResponse>(url);
  }

  public addEmployee(employeeRequest: EmployeeRequest): Observable<EmployeeResponse> {
    let url = this.apiUrl + 'Employees/';
    return this.http.post<EmployeeResponse>(url, employeeRequest);
  }

  public updateEmployee(id: string, employeeRequest: EmployeeRequest): Observable<EmployeeResponse> {
    let url = this.apiUrl + 'Employees/' + id;
    return this.http.put<EmployeeResponse>(url, employeeRequest);
  }

  public deleteEmployee(id: string): Observable<any> {
    let url = this.apiUrl + 'Employees/' + id;
    return this.http.delete(url);
  }
}
