import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-maze',
  styleUrls: ['./maze.component.scss'],
  templateUrl: './maze.component.html'
})
export class MazeComponent implements OnInit {
  _snapShots;
  _map;

  speed = 75;
  i = 0;
  displayMap;


  @Input() set snapShots(array){
    this._snapShots = array.map(map=>this.mapToDisplay(map))
  };

  @Input() set map (str) {
    console.log(str);
    this._map = str;
  };

  @Input() set run (boo) {
    this.displayMap = this.mapToDisplay(this._map);
    setTimeout(()=>{
      this.reRun()
    },1000)
  }


  ngOnInit() {
  }

  reRun() {
    this.i=0;
    this.animate()
  }

  mapToDisplay(str) {
    let map = str.split('\n').map(line => line.split(''));
    return map
  }


  animate() {
    (() => {
      setTimeout(() => {
        if (this.i < this._snapShots.length) {
          this.displayMap= this._snapShots[this.i];
          this.i++;
          this.animate();
        }
      }, this.speed);
    })()
  }
}
