let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname+'/views/index.html')
})
app.use('/public',express.static(__dirname+ '/public'));

console.log('Hello Express');


































 module.exports = app;
