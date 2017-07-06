/**
 * Created by Joshua Baert on 7/6/2017.
 */

const init = require('./init.js');
const walker = require('./walker.js');
const helper = require('./helper.js');

const mazeStr = `
##########
#...######
#.#.....##
#.#.###.##
#.#.###..#
#.#.####.#
#A#...B..#
##########
`;

let maze = init.start(mazeStr);
//console.log(init.arrayToStr(maze.map));

walker.walk(maze.map, maze.possiblePaths, maze.start, maze.end);
console.log(helper.arrayToStr(maze.map));
console.log(maze.possiblePaths);