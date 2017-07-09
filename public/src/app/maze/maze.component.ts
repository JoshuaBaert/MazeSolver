import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-maze',
  styleUrls: ['./maze.component.scss'],
  templateUrl: './maze.component.html'
})
export class MazeComponent implements OnInit {
  _maze = {time:0};
  _map;

  instructions = [];
  speed = 10;
  i = 0;
  displayMap;
  finalMap;


  @Input() set maze(maze) {
    if (maze.map) {
      this._maze = maze;
      this._maze.time = maze.time;
      this.displayMap = this.mapToDisplay(maze.initMap);
      this.finalMap = maze.map;
      this.instructions = maze.instructions;
      console.log(this.instructions)
    }
  };

  @Input() set map(str) {
    console.log(str);
    this._map = str;
  };

  @Input() set run(boo) {
    this.displayMap = this.mapToDisplay(this._map);
    setTimeout(() => {
      this.reRun()
    }, 1000)
  }


  ngOnInit() {
  }

  reRun() {
    this.displayMap = this.mapToDisplay(this._map);
    this.i = 0;
    this.animate()
  }

  mapToDisplay(map:any) {
    if (typeof map === 'string') {
      map = map.split('\n').map(line =>line.split(''))
    }
    map = map.map(line=>line.map(plot=>{
      switch (plot) {
        case '#' : return 'wall';
        case '.' : return 'road';
        case 'A' : return 'start';
        case 'B' : return 'end';
        case '!' : return 'path';
        case '*' : return 'test';
        case '_' : return 'dead';
      }
    }))
    console.log(map);
    return map
  }


  animate() {
    let i = 0

    let go = () => {
      setTimeout(() => {
        if (i < this.instructions.length && this.instructions.length < 1000) {
          this.instructions[i].map(point => {
            this.displayMap[point.x][point.y] = point.update
          });
          i++;
          go()
        } else if (this.instructions.length >= 1000) {
          this.instructions.map(wave => wave.map(point => {
            this.displayMap[point.x][point.y] = point.update
          }))
          setTimeout(()=>{
            this.displayMap = this.mapToDisplay(this.finalMap);
          },100)

        } else {

          this.displayMap = this.mapToDisplay(this.finalMap);
        }
      }, this.speed);
    };

    go()

  }
}
