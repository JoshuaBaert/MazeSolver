import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {CodemirrorModule} from 'ng2-codemirror';

import { AppComponent } from './app.component';
import {CodemirrorComponent} from 'ng2-codemirror';
import { InputComponent } from './input/input.component'

@NgModule({
  declarations: [
    AppComponent,
    CodemirrorComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // CodemirrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
