import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() calcNotify = new EventEmitter();
  fillSquare;
  constructor() { }

  ngOnInit() {
  }

  onclick() {
    // tslint:disable-next-line:only-arrow-functions
    this.fillSquare = function(){
      console.log("filled the square");
    }
  }

}
