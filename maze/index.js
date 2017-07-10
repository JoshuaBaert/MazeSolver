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
		// get time then run our solver functions
		let start = new Date();
		
		let maze = init.start(str);
		let instructions = walker.walk(maze.map, maze.possiblePaths, maze.start, maze.end);
		
		// Attach run time to maze object
		maze.time = new Date() - start +'ms';
		
		maze = output.cleanMaze(maze);
		maze.instructions = instructions;
//		console.log(maze);
		return maze
	}
};

