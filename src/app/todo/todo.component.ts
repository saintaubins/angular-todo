import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo: Todo
  username: string

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.username = this.route.snapshot.params['username'];
    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id != -1) {
      this.todoService.retrieveTodo('in28minuets', this.id)
      .subscribe(
        data => {
          console.log("data = "+ data)
          this.todo = data 
        }
      )
    }
  }

  saveTodo() {
    if(this.id == -1) {
      this.todoService.createTodo('in28minuets', this.todo)
      .subscribe (
        data => {
          console.log(data)
          //console.log('this.id = '+this.id)
          this.router.navigate(['todos'])
        }
      )
    } else {
      this.todoService.updateTodo('in28minuets', this.id, this.todo)
      .subscribe (
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }

}
