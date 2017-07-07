import { Component, AfterViewInit, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var CodeMirror: any;

@Component({
  selector: 'app-input',
  styleUrls: ['./input.component.scss'],
  template:`
    <codemirror [(ngModel)]="code"
      [config]="{
    	lineNumbers: true,
    	theme: 'seti',
    	value: 'test of value',
    	lineSeparator: '\n'
    	}">
    </codemirror>
    <button (click)="onClick()">Click me</button>
  `
})
export class InputComponent implements OnInit, AfterViewInit {
  code;

  constructor() {
    this.code = `
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

  ngAfterViewInit(){
  }
  onClick() {
    console.log(this.code)
  }
  ngOnInit() {

  }
}
