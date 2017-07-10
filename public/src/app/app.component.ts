import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Http } from '@angular/http'
import { SolveService } from './solve.service';

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tabs = {map: false, editor: true};
  width;
  map = '';
  maze = {};
  runMaze = false;

  onRun() {
    let checkValid = (str) =>{
      let map = str.split('\n').map(line=>line.split(''))
      let width = map[0].length;
      let test = true;
      map.map(line => {
        if (line.length !== width) {
          test = false;
        }
      });
      if (!test) {
        alert('Maze is not Rectangle or Square try again.');
        return test
      } else {
        return test
      }
    }
    let map = this.map.trim().replace(/[^#.AB\n]/g, '');
    // if (map.substr(0)==='\n') map = map.replace(/\n*/, '');
    // this.map = map;
    console.log(map);
    if (checkValid(map)) {
      this.solveService.postMaze(map)
        .subscribe(data=> {
          this.maze = data;
          console.log(data);
          this.switchTabs('');
          this.runMaze = !this.runMaze;
        });
    }
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

  constructor(private solveService: SolveService,private http: Http, private el: ElementRef) {

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

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#maze');
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('photo', inputEl.files.item(i));
      }
      this.solveService.uploadTxt(formData)
        .subscribe(map => this.map = map.trim())
    }
  }
}
