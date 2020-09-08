import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/models/todo.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  newTodoItem: string;
  @Output() newTodoItemAdded: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm): void {
    console.log(form)
    const todo: Todo = {
      title: this.newTodoItem,
      completed: false
    }
    this.newTodoItemAdded.emit(todo);
  }


}
