import { Component, OnInit } from '@angular/core';

import { PrimsService } from 'src/app/services/prims.service';

@Component({
  selector: 'app-prims',
  templateUrl: './prims.component.html',
  styleUrls: ['./prims.component.css']
})
export class PrimsComponent implements OnInit {

  constructor(
    private primsService: PrimsService
  ) { }

  ngOnInit() {
  }

  onCalcNotify() {
    this.primsService.primsTest();
  }

}
