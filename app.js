const express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
const app = express();
const port = 3000;
var sent = false;

app.use('/public', express.static('public'));
app.set('view engine', "ejs");
app.get('/', function(req, res){
    res.render('index', {sent: sent})
})
app.post('/form', function(req, res){
    sent = true;
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });