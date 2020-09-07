import { Injectable } from '@angular/core';
import Todo from '../models/todo.interface';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = 'http://localhost:3000'
  todosUrl: string = 'todos'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/${this.todosUrl}`);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.baseUrl}/${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url, this.httpOptions);
  }

}
