const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/psl', { useNewUrlParser: true, useUnifiedTopology: true });
const db1 = mongoose.connection;
db1.once('open', (_) => {
	console.log('Database connected: mongodb://localhost/psl');
});

db1.on('error', (err) => {
	console.error('connection error:', err);
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + 'start.html');
});

app.get('/login', (req, res) => {
	res.sendFile(__dirname + 'add_team.html');
});
app.post('/login', (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	res.send(`Username: ${username} Password: ${password}`);
});
app.post('/teams', (req, res) => {
	db.collection('Matches').insertOne(req.body.object, function (err, res) {
		if (err) throw err;
		console.log('1 document inserted');
		db.close();
	});
});

app.listen(8000, () => console.log(`listening on port 8000`));
