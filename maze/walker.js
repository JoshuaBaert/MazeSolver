/**
 * Created by Joshua Baert on 7/6/2017.
 */

let output = require('./output.js')

const walker = {
	
	walk(map, pathsArray, start, end) {
		const instructions = [];
		let walking = true;
		let positions = [[start.x,start.y]];
		
		
		/*
		*
		* This is a Breadth-First search. I choose this style because I felt it was the most thorough
		*
		* It searches all possible paths each taking one step at a time. Once a step reaches the end
		* we stop searching and consider that route the shortest due to having taken every possible turn
		* along the way.
		*
		*/
		
		
		while (walking) {
			// I will be using instructions to track all steps I take for the animation.
			instructions.push([]);
			
			positions.map((position, i, positions) => {
				let x = position[0];
				let y = position[1];
				pathsArray[i].push([x,y]);
				
				if (position[0] === end.x && position[1] === end.y){
					// Checking to see if current position is end
					
					walking = false;
				} else{
					// If it is not we then find if we can walk.
					
					let direction = this.canWalk(map,x,y);
					if (direction.canWalk) {
						direction.compass.map((plot,index) => {
							let nextXY = this.changeDirection(x,y,plot);
							if (nextXY[0] === end.x && nextXY[1] === end.y){
								// this log is here to keep us from overwriting B on the map
								console.log(`We found the end at x: ${x} & y:${y}`);
							} else {
								// if we can walk we mark this path as searched and move to the next if there is multiple
								// directions we copy the current path traveled and make a new position
								
								map[nextXY[0]][nextXY[1]] = '*';
								instructions[instructions.length-1].push({x:nextXY[0]-1, y:nextXY[1]-1, update: 'test'})
							}
							if (index === 0) {
								positions[i] = nextXY;
							} else {
								positions.push(nextXY);
								pathsArray.push(pathsArray[i].slice());
							}
						});
					} else {
						//if we can't move delete the position, path traveled and mark it as dead
						
						positions.splice(i,1);
						pathsArray.splice(i,1);
						map[x][y] = '_';
						instructions[instructions.length-1].push({x:x-1, y:y-1 , update: 'dead'})
					}
				}
			});
		}
		// luckily objects are pass by reference so the only thing I need out of this is the instructions for the animation.
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