/**
 * Created by Joshua Baert on 7/6/2017.
 */

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const maze = require('./maze/index');

const config = require('./config');


//console.log(maze.solve());


const app = express();


app.use(express.static('./public/dist'));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/solve', (req,res,next)=> {
	console.log('solving maze :\n' +req.body.map);
	res.json(maze.solve(req.body.map))
	console.log('solved maze');
	
})

app.listen(config.port,()=>{
	console.log('listening on port ' + config.port );
})