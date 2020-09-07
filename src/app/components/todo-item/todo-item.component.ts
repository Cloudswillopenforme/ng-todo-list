import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from '../../models/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoDeleted: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteBtnClick(): void {
    this.todoDeleted.emit(this.todo);
  }

}
