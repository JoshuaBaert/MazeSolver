import {Component, OnInit} from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-maze',
  styleUrls: ['./maze.component.scss'],
  template: `

    <ul class="tabs" >
      
      <li [class]="tabs.editor ? 'selected' : ''"
        (click)="switchTabs('editor')"
      >Editor</li>
      
      <li [class]="tabs.map ? 'selected' : ''"
        (click)="switchTabs('map')"
      >Map</li>
      
    </ul>

    <div class="map-display" [class]="!tabs.map ? 'hidden': ''">

    </div>
    
    <div [class]="text-editor" [class]="!tabs.editor ? 'hidden': ''">
      <codemirror [(ngModel)]="map"
        [config]="{
    	lineNumbers: true,
    	theme: 'seti',
    	value: 'test of value',
    	lineSeparator: '\n'
    	}">
      </codemirror>
      <div class="button-container">
        <button 
          (click)="onRun()"
          class="run-button btn btn-primary"
        >Run</button>
      </div>
    </div>
  `
})
export class MazeComponent implements OnInit {
  tabs = {
    map: false,
    editor: true
  }
  map;

  strToArray(str) {

  }

  onRun(){

  }

  switchTabs(tab) {
    if (tab === 'editor') {
      this.tabs ={
        map: false,
        editor: true
      }
    } else {
      this.tabs ={
        map: true,
        editor: false
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.map = `
##########
#A...#...#
#.#.##.#.#
#.#.##.#.#
#.#....#B#
#.#.##.#.#
#....#...#
##########
`.trim();
  }

}
