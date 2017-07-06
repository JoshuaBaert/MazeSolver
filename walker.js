/**
 * Created by Joshua Baert on 7/6/2017.
 */

let helper = require('./helper.js')

const walker = {
	walk(map, pathsArray, start, end) {
		const picture = [];
		let walking = true;
		let positions = [[start.x,start.y]]
		
		while (walking) {
			console.log(helper.arrayToStr(map) + '\n');
			picture.push(helper.arrayToStr(map) + '\n');
			positions.map((position, i, positions) => {
				let x = position.slice(0)[0];
				let y = position.slice(1)[0];
				pathsArray[i].push([x,y]);
				map[x][y] = '*';
				
				// Check to see if we have found the end
				if (position[0] === end.x && position[1] === end.y){
					console.log(`We hit the end at x: ${x} & y:${y}`);
					walking = false;
					
				} else{
					
					// See if we can move
					let direction = walker.canWalk(map,x,y)
					if (direction.canWalk) {
						// if we can move do so
						direction.compass.map((plot,index) => {
							let x2 = x;
							let y2 = y;
							if (index === 0) {
								positions[i] = walker.changeDirection(x,y,plot)
							} else {
								positions.push(walker.changeDirection(x,y,plot));
								pathsArray.push(pathsArray[i].slice())
							}
						});
					} else {
						//if we can't move delete the position and path
						positions.splice(i,1);
						pathsArray.splice(i,1)
					}
				}
			})
		}
		return picture.join('\n')
	},
	
	canWalk(map, x, y) {
		let count = 0;
		let compass = []
		if (map[x][y+1] === '.') {
			count+=1;
			compass.push(0);
		}
		if (map[x+1][y] === '.') {
			count+=1 ;
			compass.push(1);
		}
		if (map[x][y-1] === '.') {
			count+=1;
			compass.push(2);
		}
		if (map[x-1][y] === '.') {
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