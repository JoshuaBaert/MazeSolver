/**
 * Created by Joshua Baert on 7/6/2017.
 */

const fs = require('fs');
const helper = require('./helper.js');
const init = require('./init.js');
const walker = require('./walker.js');

const mazeStr = ``;

module.exports={
	solve(str) {
		let snapShots = []
		var start = new Date();
		let maze = init.start(str,snapShots);
		
		snapShots.concat(walker.walk(maze.map, maze.possiblePaths, maze.start, maze.end));
		var time = new Date() - start;
		
		maze.winner = helper.findWinner(maze.possiblePaths, maze.end);
		helper.displayShortest(maze.map, maze.winner);
		snapShots.push(helper.arrayToStr(maze.map))
		
		/*fs.writeFile('../picture.txt', snapShots.join('\n\n'), err => {
			if (err) console.log(err)
			else console.log('file was saved')
		})*/
	}
}

