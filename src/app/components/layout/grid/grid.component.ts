import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  rows = [];
  constructor() { }

  ngOnInit() {
    this.rows = [0,1,2,3,4,5,6,7];
  }
}
