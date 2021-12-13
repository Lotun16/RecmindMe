const Gem = require('../models/gem');

const gem_index = (req, res) => {
    Gem.find().sort( {createdAt: -1} )
        .then((result) => {
            res.render('index', {title: 'Home', gems: result});
        })
        .catch((err) =>{
            console.log(err);
        })
}

const gem_details = (req, res) => {
    console.log('in here bro');
    const id = req.params.id;
    console.log('in GET function for blog: ' + id);
    Gem.findById(id)
        .then((result) => {
            res.render('details', {gem: result, title: 'Gem Details'});
        })
        .catch((err) => {
            res.status(404).render('404', {title: 'Gem not found'});
        })
}

const gem_create_get = (req, res) => {
    console.log('in create function');
    res.render('create', {title: 'Create a new Gem'});
}

const gem_create_post = (req, res) => {
    console.log(req.body);
    const gem = new Gem(req.body);

    gem.save()
        .then((result) =>{
            res.redirect('./gems');
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    gem_index,
    gem_details,
    gem_create_get,
    gem_create_post
}