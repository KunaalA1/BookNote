const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/books/create', bookController.book_create_get);
  
router.get('/books', bookController.book_index);
  
router.post('/books', bookController.book_create_post);
  
router.get('/books/:id', bookController.book_details);
  
router.delete('/books/:id', bookController.book_delete);

router.put('/books/:id', bookController.book_mark_finished);

router.put('/update/:id', bookController.book_update)

router.get('/finished-books', bookController.book_finished_books);

router.get('/search-books', bookController.book_search_books);

//router.post('/search-books/:id', bookController.book_search_postresults);

//router.get('/search-books/:id', bookController)

module.exports = router;