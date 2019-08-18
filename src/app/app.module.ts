import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { PrimsComponent } from './components/prims/prims.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { GridComponent } from './components/layout/grid/grid.component';
import { SquareComponent } from './components/layout/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimsComponent,
    SidebarComponent,
    GridComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
