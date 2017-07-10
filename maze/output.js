/**
 * Created by Joshua Baert on 7/6/2017.
 */

module.exports = {
	cleanMaze(maze) {
		maze.winner = this.findWinner(maze.possiblePaths, maze.end);
		delete maze.possiblePaths;
		this.displayShortest(maze.map, maze.winner);
		this.removeWalls(maze.map);
		
		return maze
	},
	
	findWinner(pathsArray, end) {
		for (var i = pathsArray.length - 1; i >= 0; i--) {
			for (var j = pathsArray[i].length - 1; j >= 0; j--) {
				if (pathsArray[i][j][0] === end.x && pathsArray[i][j][1] === end.y) {
					return pathsArray[i].slice()
				}
			}
		}
	},
	
	displayShortest(map,path) {
		for (var i = path.length - 2; i >= 1; i--) {
			map[path[i][0]][path[i][1]] = "!"
		}
	},
	
	removeWalls(map) {
		map.map(line=>{
			line.pop();
			line.shift();
		})
		map.pop();
		map.shift();
		return map
	},
	
	removeWallsStr(str) {
		let array = str.split('\n').map(line=>line.split(''))
		array.map(line=>{
			line.pop();
			line.shift();
		})
		array.pop();
		array.shift();
		return array.map(line => line.join('')).join('\n')
	},
	
	arrayToStr(array) {
		return this.removeWallsStr(array.map(line => line.join('')).join('\n'))
	},
	
	simpleToStr(array) {
		return array.map(line => line.join('')).join('\n')
	}
	
}