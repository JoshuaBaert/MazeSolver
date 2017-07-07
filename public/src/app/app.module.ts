import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorComponent } from 'ng2-codemirror-typescript';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { MazeComponent } from './maze/maze.component'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CodemirrorComponent,
    MazeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
