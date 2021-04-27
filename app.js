var express = require('express');

var nunjucks  = require('nunjucks');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/tailwindcss/dist'));

// Apply nunjucks and add custom filter and function (for example). 
var env = nunjucks.configure(['views/'], { // set folders with templates
    autoescape: true, 
    express: app
});
env.addFilter('myFilter', function(obj, arg1, arg2) {
    console.log('myFilter', obj, arg1, arg2);
    // Do smth with obj
    return obj;  
});
env.addGlobal('myFunc', function(obj, arg1) { 
    console.log('myFunc', obj, arg1);
    // Do smth with obj
    return obj;
});

app.get('/', function(req, res){
    res.render('index.html', {title: 'Main page'});    
});

app.get('/foo', function(req, res){
    res.locals.smthVar = 'This is Sparta!';
    res.render('foo.html', {title: 'Foo page'});    
});

app.listen(4000, function() {
    console.log('Example app listening on port 4000...');
});