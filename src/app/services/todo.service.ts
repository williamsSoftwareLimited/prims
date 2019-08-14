import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrls = 'https://my-json-server.typicode.com/williamsSoftwareLimited/apiTest/todos';
  todosLimit = '?_limit=5';
  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todoUrls}${this.todosLimit}`);
  }

  toggleCompleted(todo: Todo): Observable<any>{
    const url = `${this.todoUrls}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

}
