import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimsComponent } from './prims.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { GridComponent } from '../layout/grid/grid.component';
import { SquareComponent } from '../layout/square/square.component';

describe('PrimsComponent', () => {
  let component: PrimsComponent;
  let fixture: ComponentFixture<PrimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimsComponent,
      SidebarComponent,
      GridComponent,
      SquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
