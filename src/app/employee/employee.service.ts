import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { AppInitService } from '../app-init.service';

//const url = "https://ngjsonservice20191211114126.azurewebsites.net/api/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = '';

  list(): Observable<Employee[]> {
    return this.http.get(`${this.url}`) as Observable<Employee[]>;
  }
  get(id): Observable<Employee> {
    return this.http.get(`${this.url}/${id}`) as Observable<Employee>;
  }
  insert(employee: Employee): Observable<any> {
    return this.http.post(`${this.url}`, employee) as Observable<any>;
  }
  update(employee: Employee): Observable<any> {
    return this.http.put(`${this.url}/${employee.id}`, employee) as Observable<any>;
  }
  delete(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { 
    this.url = this.init.config.serviceUrl;
    console.log("Url:", this.url);
  }
}
