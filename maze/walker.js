/**
 * Created by Joshua Baert on 7/6/2017.
 */

let output = require('./output.js')

const walker = {
	
	walk(map, pathsArray, start, end) {
		const instructions = [];
		let walking = true;
		let positions = [[start.x,start.y]];
		
		while (walking) {
			
			positions.map((position, i, positions) => {
				let x = position.slice(0)[0];
				let y = position.slice(1)[0];
				pathsArray[i].push([x,y]);
				instructions.push([]);
				
				
				
				// Check to see if we have found the end
				if (position[0] === end.x && position[1] === end.y){
					walking = false;
					
				} else{
					
					// See if we can move
					let direction = walker.canWalk(map,x,y);
					if (direction.canWalk) {
						// if we can move do so
						direction.compass.map((plot,index) => {
							let nextXY = walker.changeDirection(x,y,plot);
							// see if next is end of maze
							if (nextXY[0] === end.x && nextXY[1] === end.y){
								console.log(`We found the end at x: ${x} & y:${y}`);
							} else {
								map[nextXY[0]][nextXY[1]] = '*';
								instructions[instructions.length-1].push({x:nextXY[0]-1, y:nextXY[1]-1, update: '*'})
							}
							if (index === 0) {
								positions[i] = nextXY;
							} else {
								positions.push(nextXY);
								pathsArray.push(pathsArray[i].slice());
							}
						});
					} else {
						//if we can't move delete the position and path
						positions.splice(i,1);
						pathsArray.splice(i,1);
						map[x][y] = '_';
						instructions[instructions.length-1].push({x:x-1, y:y-1 , update: '_'})
					}
				}
			});
		}
		return instructions
	},
	
	canWalk(map, x, y) {
		let count = 0;
		let compass = []
		if (map[x][y+1] === '.' || map[x][y+1] === 'B') {
			count+=1;
			compass.push(0);
		}
		if (map[x+1][y] === '.' || map[x+1][y] === 'B') {
			count+=1 ;
			compass.push(1);
		}
		if (map[x][y-1] === '.' || map[x][y-1] === 'B') {
			count+=1;
			compass.push(2);
		}
		if (map[x-1][y] === '.' || map[x-1][y] === 'B') {
			count+=1;
			compass.push(3);
		}
		return {canWalk: count >= 1, compass: compass}
	},
	
	changeDirection(x,y,test){
		switch (test) {
			case 0 :
				y+=1;
				break;
			case 1 :
				x+=1;
				break;
			case 2 :
				y-=1;
				break;
			case 3 :
				x-=1;
				break;
		}
		return [x,y]
	},
	
};

module.exports = walker;