var express = require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var app = express();
var Meow = mongoose.model('Meow', {
 text: String
  });

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mittens');

app.use(express.static('public'));

app.get('/meows', function(req, res, next){
    Meow.find({}, function (err, meows){
        return res.json(meows);
    });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

