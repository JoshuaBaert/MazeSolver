import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SolveService {

  constructor(private _http: Http) { }

  postMaze(mazeStr) {
    return this._http.post('http://localhost:8080/api/solve', {map:mazeStr})
      .map(req => req.json())
  }

}
