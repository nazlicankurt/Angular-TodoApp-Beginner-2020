import { Component, OnInit } from '@angular/core';
import { Todo } from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todo: Todo[] =[];
  input : string ="";
  constructor() { }

  ngOnInit(): void {
   this.todo = [
     {
       content: "Check Angular CLI",
       completed: true
     },
     {
      content: "Check Angular Material Doc",
      completed:  false
     },
     {
      content: "List my company project information",
      completed:  true
     }
   ]
  }
  onAdd(){
    this.todo.push({
      content : this.input,
      completed: false
    });
  }
  
  onDelete(id : number){ {
    this.todo = this.todo.filter((v, i) => i !== id);
  }
  }

}
