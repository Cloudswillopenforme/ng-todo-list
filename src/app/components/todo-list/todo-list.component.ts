import { Component, OnInit } from '@angular/core';
import Todo from '../../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

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

  ngOnInit(): void {
  }

  handleDeleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(el => el !== todo);
  }

}
