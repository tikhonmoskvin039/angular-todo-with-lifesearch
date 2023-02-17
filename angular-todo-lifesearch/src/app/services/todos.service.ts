import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

// ! делаем для автоматической регистрации этого сервиса как сервиса ангуляра

export interface ITodo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({ providedIn: 'root' }) // ! если мы делает иньекции зависимостей то Injectable ставим строгоь перед тем классом, в который мы их делаем
export class TodosService {
  constructor(private http: HttpClient) {}
  // public todos: ITodo[] = [
  //   { id: 1, title: 'Buy milk', completed: false, date: new Date() },
  //   { id: 2, title: 'Buy chocolate', completed: true, date: new Date() },
  //   { id: 3, title: 'Buy butter', completed: false, date: new Date() },
  // ]
  public todos: ITodo[] = []

  fetchTodos(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .pipe(tap((todos) => (this.todos = todos))) // ! получаем стрим и обрабатываем его, возвращая данные
  }

  onToggle(id: number) {
    const index = this.todos.findIndex((todos) => todos.id === id)
    this.todos[index].completed = !this.todos[index].completed
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((td) => td.id !== id)
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo)
  }
}
