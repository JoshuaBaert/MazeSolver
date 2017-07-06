/**
 * Created by Joshua Baert on 7/6/2017.
 */

const init = require('./init.js');

const maze = `
##########
#...######
#.#.######
#.#.######
#.#.######
#.#.######
#A#.....B#
##########
`

let mazeObj = init.start(maze);
console.log(init.arrayToStr(mazeObj.map));
