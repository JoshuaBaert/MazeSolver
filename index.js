/**
 *
 * This is my response to PeopleNet's Code Challenge You can find the details of the challenge in the challenge folder.
 *
 */

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const multer = require('multer');


const maze = require('./maze/index');

const config = require('./config');

let uploads = __dirname + '/uploads';
const upload = multer({dest: uploads});

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
	let tmp_path = req.files[0].path;
	console.log('made text file @ ' + tmp_path);
	fs.readFile(tmp_path, 'utf8', (err, data)=>{
		res.json(data);
	});
	fs.unlink(tmp_path, err => {
		if (err) console.log(err)
		else console.log('deleted file')
	})
	
})

app.listen(config.port,()=>{
	console.log('listening on port ' + config.port );
})