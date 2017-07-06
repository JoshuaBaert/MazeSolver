/**
 * Created by Joshua Baert on 7/6/2017.
 */

const walker = {
	walk(map, pathsArray, start, end) {
		let walking = true;
		let positions = [[start.x,start.y]]
		
		while (walking) {
			walking = false;
			positions.map((position, i, positions) => {
				let x = position.slice(0)[0];
				let y = position.slice(1)[0];
				console.log('x:'+x+' y;'+y);
				pathsArray[i].push([x,y]);
				map[x][y] = '*';
				let direction = walker.canWalk(map,x,y)
				if (direction.canWalk) {
					console.log('can walk')
					walking = true;
					if(direction.compass.length ===1) {
						console.log('one direction')
						console.log(direction.compass);
						switch (direction.compass[0]) {
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
							default :
								console.log("didn't do anything")
						}
						console.log('x:'+x+' y;'+y);
						
					} else {
						// more than one direction
						walking = false
					}
					
				}
				positions[i] = [x,y]
			})
			
		}
		
	},
	canWalk(map, x, y) {
		let count = 0;
		let compass = []
		if (map[x+1][y] === '.') {
			count+=1 ;
			compass.push(1);
		}
		if (map[x-1][y] === '.') {
			count+=1;
			compass.push(3);
			
		}
		if (map[x][y+1] === '.') {
			count+=1;
			compass.push(0);
		}
		if (map[x][y-1] === '.') {
			count+=1;
			compass.push(2);
		}
		return {canWalk: count >= 1, compass: compass}
	}
	
};

module.exports = walker;