/**
 * Created by Joshua Baert on 7/5/2017.
 */

"use strict";

const output = require('./output.js')

let testMaze = ``;

const init = {
	
	start(mazeStr, snapShots) {
		let maze = {
			initMap: mazeStr,
			map: this.strToArray(mazeStr)
		};
		maze.map = this.addWalls(maze.map);
		maze = this.findStart(maze);
		maze.possiblePaths = [[]];
		
		// Maze obj should be ready for walker to find solution
		return maze
	},
	
	strToArray(str) {
		return str.trim().split('\n').map(line => line.trim().split(''))
	},
	
	findStart(maze) {
		let array = maze.map
		for (let x = array.length - 1; x >= 0; x--) {
			for (let y = array[x].length - 1; y >= 0; y--) {
				if (array[x][y] === 'A') {
					maze.start = {x: x, y: y};
				}
				if (array[x][y] === 'B') {
					maze.end = {x: x, y: y};
				}
			}
		}
		return maze
	},
	
	addWalls(map){
		// Makes it easier and less coding on the maze walker
		map.map(line => {
			line.unshift('#');
			line.push('#');
		});
		function topBottomWalls(map) {
			let rtn = [];
			map[0].map(point => rtn.push('#'));
			return rtn
		}
		map.unshift(topBottomWalls(map));
		map.push(topBottomWalls(map));
		
		return map
	},
	
};

module.exports = init;