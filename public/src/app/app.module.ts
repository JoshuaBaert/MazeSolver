import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorComponent } from 'ng2-codemirror-typescript';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { MazeComponent } from './maze/maze.component';

import { FileSelectDirective } from 'ng2-file-upload';

import { SolveService} from './solve.service';

@NgModule({
  declarations: [
    AppComponent,
    CodemirrorComponent,
    MazeComponent,
    FileSelectDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [SolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
