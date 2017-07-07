/**
 * Created by Joshua Baert on 7/5/2017.
 */

"use strict";

const helper = require('./helper.js')

let testMaze = ``;

 const init = {
	
	strToArray(str) {
		return str.trim().split('\n').map(line => line.trim().split(''))
	},
	
	findStart(array) {
		let results = {};
		for (let x = array.length - 1; x >= 0; x--) {
			for (let y = array[x].length - 1; y >= 0; y--) {
				if (array[x][y] === 'A') {
					results.start = {x: x, y: y};
					array[x][y] = '.';
				}
				if (array[x][y] === 'B') {
					results.end = {x: x, y: y};
					array[x][y] = '.';
				}
			}
		}
		results.map = array;
		return results
	},
	
	addWalls(map){
		map.map(line => {
			line.unshift('#');
			line.push('#');
		});
		map.unshift(topBottomWalls(map));
		map.push(topBottomWalls(map));
		function topBottomWalls(map) {
			let rtn = [];
			map[0].map(point=> rtn.push('#'));
			return rtn
		}
		return map
	},
	
	fillDead(maze, snapShots) {
		let change = true;
		let map = maze.map.slice();
		while (change) {
			change = false;
			snapShots.push(helper.arrayToStr(map));
			for (let x = 1; x < map.length - 1; x++) {
				for (let y = 1; y < map[x].length - 1; y++) {
					let count = 0;
					let isStart = (x === maze.start.x && y === maze.start.y);
					let isEnd = (x === maze.end.x && y === maze.end.y);
					if (map[x + 1][y] === "#") count++;
					if (map[x - 1][y] === "#") count++;
					if (map[x][y + 1] === "#") count++;
					if (map[x][y - 1] === "#") count++;
//				console.log('x:' + x + ' y:' + y + ' isStart:' + isStart + ' isEnd:' + isEnd);
					if (!isStart && !isEnd && count === 3 && map[x][y] === '.') {
						map[x][y] = "#";
						change = true;
					}
				}
			}
		}
		maze.map = map.slice();
		return maze
	},
	
	start(mazeStr, snapShots) {
		let maze = this.strToArray(mazeStr);
		maze = this.addWalls(maze);
		maze = this.findStart(maze);
//		maze = this.fillDead(maze, snapShots);
		
		maze.possiblePaths = [[]];
		return maze
	}
	
};

module.exports = init;