import {Component, OnInit} from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-maze',
  styleUrls: ['./maze.component.scss'],
  templateUrl: './maze.component.html'
})
export class MazeComponent implements OnInit {
  tabs = {
    map: false,
    editor: true
  }
  map;

  mapToDisplay(str) {
    let map = str.split('\n').map(line => line.split(''));
    console.log(map)
    return map
  }

  onRun(){
    console.log(this.map);
    this.mapToDisplay(this.map)
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
