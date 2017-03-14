const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/twitter-poc-tweets');

const Tweet = mongoose.model('Account', {
    author: {type: String},
    tweet: {type: String},
});


app.listen(3001, () => console.log("Server up on 3001"))
