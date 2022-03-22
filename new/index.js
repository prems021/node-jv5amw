const express = require('express');

const routes = require('./routes');

var cors = require('cors');

const app = express();
const path = require('path');
const port = process.env.PORT || 4401;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/impress-api/', routes());

app.get('/about', function (req, res) {
  res.send('Hello World, How are you!');
});
app.get('/', function (req, res) {
  //  res.sendFile(path.join(__dirname + "/public/index.html"));
  res.send('Hello World,How are you mas!');
});

// app.options('*', cors())

app.listen(port, function () {
  console.log(`This app tuning on port ${port}!`);
});
