import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';
import { ResponseApi } from '../Models/ResponseApi'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly apiUrl = 'https://localhost:7133/api/';

  constructor(private http: HttpClient) { }

  // Department
  GetEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + 'Employee/GetEmployees');
  }

  addDepartment(dept: Employee): Observable<ResponseApi> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<ResponseApi>(this.apiUrl + 'Employee/CreateEmployee', dept, httpOptions);
  }

  updateDepartment(dept: Employee): Observable<ResponseApi> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<ResponseApi>(this.apiUrl + 'Employee/UpdateEmployee/', dept, httpOptions);
  }

  deleteDepartment(id: number): Observable<ResponseApi> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<ResponseApi>(this.apiUrl + 'Employee/DeleteEmployee/' + id, httpOptions);
  }
}