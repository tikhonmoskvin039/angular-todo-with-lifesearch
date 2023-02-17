import { TodosService } from './../../services/todos.service'
import { Component, OnInit } from '@angular/core'
import { delay } from 'rxjs/operators'

@Component({
  // ! decorator
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  // @Input() todos: ITodo[] = [] // ! обозначает что получаем массив элементов
  // @Output() onToggle = new EventEmitter<number>()
  constructor(public todosService: TodosService) {}

  public loading: boolean = true
  public searchString: string = ''

  ngOnInit() {
    this.todosService
      .fetchTodos()
      .pipe(delay(500)) // ! имитируем сет таймаут из библиотеки rxjs
      .subscribe(() => (this.loading = false)) // ! запрашивает тудушки в тот момент, когда компонент стартует,подписываемся на стрим и убираем флаг загрузки данных
  }

  onChange(id: number) {
    // this.onToggle.emit(id)
    this.todosService.onToggle(id)
    // ! динамически передаём айди в чекбокс и далее прокидывает его в сам компонент ЭППП в вёрстку
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }
}
