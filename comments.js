// Create web server

// Import express
var express = require('express');
var router = express.Router();

// Import model
var Comment = require('../models/comment');

// Import controller
var commentController = require('../controllers/commentController');

// GET request for creating a new comment
router.get('/new', commentController.comment_create_get);

// POST request for creating a new comment
router.post('/new', commentController.comment_create_post);

// GET request for deleting a comment
router.get('/:id/delete', commentController.comment_delete_get);

// POST request for deleting a comment
router.post('/:id/delete', commentController.comment_delete_post);

// GET request for editing a comment
router.get('/:id/edit', commentController.comment_edit_get);

// POST request for editing a comment
router.post('/:id/edit', commentController.comment_edit_post);

// GET request for one comment
router.get('/:id', commentController.comment_detail);

// GET request for list of all comments
router.get('/', commentController.comment_list);

// Export router
module.exports = router;