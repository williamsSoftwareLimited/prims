import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() calcNotify = new EventEmitter();
  fillSquare;
  selected: boolean = false;
  constructor() { }

  ngOnInit() {
    this.fillSquare = () => {
      if (this.selected === false) {
        document.getElementById('fillSquareId').style.background='black';
      } else {
        document.getElementById('fillSquareId').style.background='white';
      }
      this.selected = !this.selected;
    }
  }
}
