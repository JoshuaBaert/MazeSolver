import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-maze',
  styleUrls: ['./maze.component.scss'],
  templateUrl: './maze.component.html'
})
export class MazeComponent implements OnInit {
  _maze;
  _map;

  instructions
  speed = 100;
  i = 0;
  displayMap;
  finalMap;


  @Input() set maze(maze) {
    if(maze.map){
      this._maze = maze
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

  mapToDisplay(str) {
    let map = str.split('\n').map(line => line.split(''));
    return map
  }


  animate() {
    setTimeout(() => {
      if (this.i < this.instructions.length) {
        this.instructions[this.i].map(point=>{
          console.log(point);
          console.log(this.displayMap[point.x][point.y]);
          this.displayMap[point.x][point.y] = point.update
        });
        this.i++;
        this.animate();
      } else {
        this.displayMap = this.finalMap;
        this.i = 0
      }
    }, this.speed);
  }
}
