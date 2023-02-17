import { ITodo, TodosService } from './../../services/todos.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  title: string = '' // ! создаем для инпута

  ngOnInit() {}

  addTodo() {
    const todo: ITodo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date(),
    }

    this.todosService.addTodo(todo)
    this.title = ''
  }
}
