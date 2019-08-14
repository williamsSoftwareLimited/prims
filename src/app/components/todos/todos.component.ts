import { Component, OnInit } from '@angular/core';
import { PrimsService } from 'src/app/services/prims.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor(
    private primsService: PrimsService
  ) { }

  ngOnInit() {
  }


  testPrims(){
    this.primsService.primsTest();
  }

}
