import { TodosFilterPipe } from './services/todos.filter.pipe';
import { HttpClientModule } from '@angular/common/http'
import { TodosComponent } from './component/todos/todos.component'
import { TodoFormComponent } from './component/todo-form/todo-form.component'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms' // ! импортируем для двустороннего байндинга инпута

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoFormComponent, TodosFilterPipe], // ! сюда регистрируем все компоненты с которыми мы работаем
  imports: [BrowserModule, HttpClientModule, FormsModule], // ! импортируем модуль http для загрузки данных с сервера
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
