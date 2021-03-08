const express = require('express');
const app = express();
var bodyParser = require('body-parser');

console.log('Hello World!')

/*
app.get('/', {request, response} => {
  response.send('Hello Express');
});

app.get('/robot', {req, res} => {
  res.send('I am a robot!');
});

app.use((req, res, next) => {
  const {method, path} = req;
  const ip = '127.0.0.1';
  console.log(`${method} ${path} - ${ip}`)
})
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});


app.get('/', (req, res) =>{
  const message = (process.env.MESSAGE_STYLE === 'uppercase') ? 'HELLO JSON' : 'Hello json';
  res.json({message})
})


/*app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({
    time: req.time
  })
});

app.get('/:word/echo', (req,res) => {
  const {params} = req;

  res.json({echo: params.word });
});
app.get('/name', (req, res) => {
  const (first, last) = req.query;

  res.json({
    name: `${first} ${last}`
  })
});
*/
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/name', function(req, res){
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

/*
app.get('/now', (req, res) => {
  res.json({
    time: new Date().toString()
  })
});
*/




 module.exports = app;
