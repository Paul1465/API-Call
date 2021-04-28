var express = require('express');

const api_helper = require('./public/js/api');
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

app.get('/', (req, res) => {

    api_helper.make_API_call('https://api.rocketfid.com/activity/cache/all/0/25')

    .then(response => {
        res.render('index.njk', { nickname : response[0].performer.nickname})
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(4000, function() {
    console.log('Example app listening on port 4000...');
});