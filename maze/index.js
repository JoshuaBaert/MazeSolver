/**
 * Created by Joshua Baert on 7/6/2017.
 */

const output = require('./output.js');
const fs = require('fs');
const init = require('./init.js');
const walker = require('./walker.js');

const mazeStr = ``;

module.exports={
	solve(str) {
		let start = new Date();
		let maze = init.start(str);
		
		let instructions = walker.walk(maze.map, maze.possiblePaths, maze.start, maze.end);
		maze.time = new Date() - start +'ms';
		
		maze = output.cleanMaze(maze);
		instructions.push(output.simpleToStr(maze.map));
		maze.instructions = instructions;
		return maze
	}
};

