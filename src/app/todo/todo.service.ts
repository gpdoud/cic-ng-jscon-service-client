import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

const url = "https://ngjsonservice20191211114126.azurewebsites.net/api/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list(): Observable<Todo[]> {
    return this.http.get(`${url}`) as Observable<Todo[]>;
  }
  get(id): Observable<Todo> {
    return this.http.get(`${url}/${id}`) as Observable<Todo>;
  }
  insert(todo: Todo): Observable<any> {
    return this.http.post(`${url}`, todo) as Observable<any>;
  }
  update(todo: Todo): Observable<any> {
    return this.http.post(`${url}/${todo.id}`, todo) as Observable<any>;
  }
  delete(id): Observable<any> {
    return this.http.delete(`${url}/${id}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
