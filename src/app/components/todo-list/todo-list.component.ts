import { Component, OnInit } from '@angular/core';
import Todo from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(
    private todosService: TodoService
  ) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(res => {
      this.todos = res;
    }
    );
  }

  handleGetTodos(): void {
    this.todosService.getTodos().subscribe(res => {
      this.todos = res;
    }
    );
  }

  handleDeleteTodo(todo: Todo): void {
    this.todosService.deleteTodo(todo).subscribe(res => {
      this.handleGetTodos();
    }
    );
  }

}
