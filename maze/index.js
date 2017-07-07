/**
 * Created by Joshua Baert on 7/6/2017.
 */

const finish = require('./finish.js');
const fs = require('fs');
const helper = require('./helper.js');
const init = require('./init.js');
const walker = require('./walker.js');

const mazeStr = ``;

module.exports={
	solve(str) {
		let start = new Date();
		let maze = init.start(str);
		
		let snapShots = walker.walk(maze.map, maze.possiblePaths, maze.start, maze.end);
		maze.time = new Date() - start +'ms';
		
		maze = finish.cleanMaze(maze);
//		console.log(snapShots);
		snapShots.push(helper.arrayToStr(maze.map));
		return maze
	}
}

