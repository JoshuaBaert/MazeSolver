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
//		maze = this.fillDead(maze, snapShots);
		
		maze.possiblePaths = [[]];
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
		map.map(line => {
			line.unshift('#');
			line.push('#');
		});
		map.unshift(topBottomWalls(map));
		map.push(topBottomWalls(map));
		function topBottomWalls(map) {
			let rtn = [];
			map[0].map(point => rtn.push('#'));
			return rtn
		}
		
		return map
	},
	
	fillDead(maze, snapShots) {
		let change = true;
		let map = maze.map.slice();
		while (change) {
			change = false;
			snapShots.push(output.arrayToStr(map));
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
	}
	
};

module.exports = init;