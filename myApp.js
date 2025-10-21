let express = require('express');
require('dotenv').config()
let app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname+'/views/index.html')
})
app.use('/public',express.static(__dirname+ '/public'));

app.get('/json', function(req, res){
    res.json({
        "message": process.env.MESSAGE_STYLE === 'uppercase'? 'HELLO JSON': 'hello json'
    })
})

console.log('Hello Express');


































 module.exports = app;
