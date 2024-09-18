const express = require('express');
const router = express.Router();
const { getPosts , deletePost } = require('../Controllers/posts.controller');

// Define the route for getting posts
router.get('/', getPosts);
router.delete('/:id', deletePost);

module.exports = router;
