const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const gemRoutes = require('./routes/gemRoutes');
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
app.use(express.urlencoded({ extended: true /* not necessary */ }));
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
    const gems = [
        {title: 'Attack on Titan', desc: 'attackontitan', link: 'website'},
        {title: 'God of War', desc: 'godofwar', link: 'website'},
        {title: 'Jojos Bizarre Adventure', desc: 'jojogaygay', link: 'website'},
        {title: 'Arcane', desc: 'leagueofjinxissosexy', link: 'website'},
        {title: 'Uncharted', desc: 'justwatchthedamnmovie', link: 'website'},
        
    ]
    // res.render('index', { title: 'Home', gems});
    res.redirect('/gems');
});


app.get('/about-me', (req, res) => {
    res.render('about', {title: 'About Me'});
});

//gem routes
app.use('/gems', gemRoutes);

//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});
