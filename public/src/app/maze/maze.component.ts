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
    map: true,
    editor: true
  };
  width;
  map;
  displayMap

  mapToDisplay(str) {
    let map = str.split('\n').map(line => line.split(''));
    console.log(map);
    this.displayMap = map
  }

  onRun(){
    console.log(this.map);
    this.mapToDisplay(this.map)
    this.switchTabs('')
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
    console.log(document.getElementById('maze').offsetWidth);

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
    this.mapToDisplay(this.map);

    let even = (document.getElementById('maze').offsetWidth) / this.displayMap[0].length;
    this.width = even > 30 ? 30 : even;
    $('.line').css('width',this.width * this.displayMap[0].length);
    console.log(this.width);
  }

}
