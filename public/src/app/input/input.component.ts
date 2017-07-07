import { Component, AfterViewInit, OnInit } from '@angular/core';

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
  }

  ngAfterViewInit(){
  }
  onClick() {
    console.log(this.code)
  }
  ngOnInit() {
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
}
