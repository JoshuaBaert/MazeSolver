/**
 * Created by Joshua Baert on 7/6/2017.
 */


module.exports = {
	arrayToStr(array) {
		return array.map(line => line.join('')).join('\n')
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
		path.map(cords=>map[cords[0]][cords[1]] = '!')
	}
	
}