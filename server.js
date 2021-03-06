var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var wunderlistSecret = process.env.WUNDERLIST_SECRET;

app.use(bodyParser.json()); // support json encoded bodies

console.log('hello world?!');

app.get('/', function (req, res) {
    console.log('get called');
   res.send({ message: 'hello world!' });
});

app.post('/wunderlist/callback', function (req, res) {
    console.log('post called');
    var code = req.body.code,
        state = req.body.state;

    if(state === wunderlistSecret) {
        res.send('Hello World');
    } else {
        res.status(500).send('Something broke!');
    }
});

app.listen(process.env.PORT || 3000);