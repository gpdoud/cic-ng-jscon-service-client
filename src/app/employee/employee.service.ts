import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

const url = "https://ngjsonservice20191211114126.azurewebsites.net/api/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  list(): Observable<Employee[]> {
    return this.http.get(`${url}`) as Observable<Employee[]>;
  }
  get(id): Observable<Employee> {
    return this.http.get(`${url}/${id}`) as Observable<Employee>;
  }
  insert(employee: Employee): Observable<any> {
    return this.http.post(`${url}`, employee) as Observable<any>;
  }
  update(employee: Employee): Observable<any> {
    return this.http.put(`${url}/${employee.id}`, employee) as Observable<any>;
  }
  delete(id): Observable<any> {
    return this.http.delete(`${url}/${id}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
