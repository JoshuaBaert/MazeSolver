import {Component, OnInit} from '@angular/core';
import {SolveService} from './solve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tabs = {map: false, editor: true};
  width;
  map;
  snapShots = [];
  runMaze = false;

  onRun() {
    console.log(this.map);
    this.solveService.postMaze(this.map)
      .subscribe(data=> {
        this.snapShots = data.snapShots;
        console.log(this.snapShots);
        this.switchTabs('');
        this.runMaze = !this.runMaze;
      });



  }

  switchTabs(tab) {
    if (tab === 'editor') {
      this.tabs = {
        map: false,
        editor: true
      }
    } else {
      this.tabs = {
        map: true,
        editor: false
      }
    }
  }

  constructor(private solveService: SolveService) {

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

  ngOnInit() {

  }
}
