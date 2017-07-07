import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  styleUrls: ['./input.component.scss'],
  template: `
    <codemirror [(ngModel)]="code"
    [config]="config">
      
    </codemirror>
  `
})
export class InputComponent implements OnInit {
  code;
  config = {

  };

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
`
  }

  ngOnInit() {
  }

}
