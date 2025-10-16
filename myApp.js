let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send("Hello World")
})

console.log('Hello Express');
console.log(express)


































 module.exports = app;
