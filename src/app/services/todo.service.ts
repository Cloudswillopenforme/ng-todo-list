import { Injectable } from '@angular/core';
import Todo from '../models/todo.interface';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Array<Todo> = [
    {
      "id": 2,
      "title": "Send a copy of the contract to Lucy",
      "completed": false
    },
    {
      "id": 3,
      "title": "Call mom",
      "completed": true
    },
    {
      "id": 4,
      "title": "Book a restaurant for the evening",
      "completed": true
    },
    {
      "title": "Walk the dog",
      "completed": false,
      "id": 7
    },
  ]

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }
}
