import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() func;
  @Input() id;
  constructor() { }

  ngOnInit() {
  }

  onclick() {
    console.log("square clicked");
    if (this.func) {
      this.func();
    }
  }
}
