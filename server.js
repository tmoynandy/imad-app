var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'freelancer.css'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'freelancer.min.css'));
});


app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','contact_me.js'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','freelancer.js'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','freelancer.min.js'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','jqBootstrapValidation.js'));
});





app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/about.html',function(req,res){
    res.sendFile(path.join(__dirname,'ui','about.html'));
});

app.get('/ui/contact.html',function(req,res){
    res.sendFile(path.join(__dirname,'ui','contact.html'));
});

app.get('/ui/works.html',function(req,res){
    res.sendFile(path.join(__dirname,'ui','works.html'));
});

app.get('/ui/index_content.html',function(req,res){
    res.sendFile(path.join(__dirname,'ui','index_content.html'));
});

/*app.get('/ui/tanu.html',function(req,res){
    res.sendFile(path.join(__dirname,'ui','tanu.html'));
});
*/






// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
