import { ITodo } from './todos.service'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform (todos: ITodo[], search: string = ''): ITodo[] {
    if(!search.trim()) {
      return todos
    }
    return todos.filter(todo => {
      return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }
}
