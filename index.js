/**
 * Created by Joshua Baert on 7/6/2017.
 */

const fs = require('fs');
const helper = require('./helper.js');
const init = require('./init.js');
const walker = require('./walker.js');

const mazeStr = `
#A#################################################
#................................................##
#................................................##
#................#...............................##
#................#...............................##
#................#...............................##
#................#...............................##
#................#...............................##
#................#...............................##
#................#...............................##
#................#...............................##
#.....############...............................##
#................................................##
#................................................##
#................................................##
#................................................##
#................................................##
#................................................##
#................................................##
###############################################B###
`;
console.log(mazeStr);

let maze = init.start(mazeStr);
console.log(helper.arrayToStr(maze.map) + '\n');

let picture = walker.walk(maze.map, maze.possiblePaths, maze.start, maze.end);


maze.winner = helper.findWinner(maze.possiblePaths, maze.end);
//console.log(maze.winner);
console.log(maze.possiblePaths);

helper.consoleDisplay(maze.map, maze.winner);
console.log(helper.arrayToStr(maze.map));

picture += '\n' + helper.arrayToStr(maze.map);

fs.writeFile('./picture.txt', picture, err => {
	if (err) console.log(err)
	else console.log('file was saved')
})
