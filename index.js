/**
 * Created by Joshua Baert on 7/6/2017.
 */

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const multer = require('multer');


const maze = require('./maze/index');

const config = require('./config');

let location = __dirname + '/uploads';

const upload = multer({dest: location});

const app = express();


app.use(express.static('./public/dist'));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/solve', (req,res,next)=> {
	console.log('solving maze :\n' +req.body.map);
	res.json(maze.solve(req.body.map));
	console.log('solved maze');
	
});

var type = upload.any('txt');
app.post('/api/txtsolve', type ,(req, res, next) =>{
	console.log(req.files)
	let tmp_path = req.files[0].path;
	fs.readFile(tmp_path, 'utf8', (err, data)=>{
		console.log(data);
	});
	
})

app.listen(config.port,()=>{
	console.log('listening on port ' + config.port );
})