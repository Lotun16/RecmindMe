const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// console.log('hi');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://lotun:wyckoff20@rec-mind.54sg6.mongodb.net/rec-mind?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {
        console.log("connected to db");
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    })

//register view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));

//middleware
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});
