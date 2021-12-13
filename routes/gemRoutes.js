const express = require('express');
const gemController = require('../controllers/gemController');
const router = express.Router();

router.get('/', gemController.gem_index);

router.get('/create', gemController.gem_create_get);

router.post('/', gemController.gem_create_post);

router.get('/:id', gemController.gem_details);

module.exports = router;