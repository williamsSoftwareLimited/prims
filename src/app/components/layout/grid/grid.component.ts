import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  select;
  constructor() { }

  ngOnInit() {
    this.select = () => {
      console.log("selected");
    }
  }

}
