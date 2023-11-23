const Book = require('../models/bookObject');



const book_index = (req, res) => {
    Book.find().sort({ createdAt: -1 })
    .then(result => {
        res.render('index', { books: result, title: 'All books' });
    })
    .catch(err => {
        console.log(err);
    })
}

const book_details = (req, res) => {
    const id = req.params.id;    
    Book.findById(id)
      .then(result => {
        res.render('details', { book: result, title: 'Book Details' });
      })
      .catch(err => {
        res.render('404', {title : 'Blog Not Found'});
      });
  
}

const book_create_get = (req, res) => {
    res.render('add_book', { title: 'Create a new blog' });
}

const book_create_post = (req, res) => {
        // console.log(req.body);
        const book = new Book(req.body);
        book.save()
          .then(result => {
            res.redirect('/books');
          })
          .catch(err => {
            console.log(err);
          });
}


const book_delete = (req, res) => {
    const id = req.params.id;
    
    Book.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/books' });
      })
      .catch(err => {
        console.log(err);
      });
}
const book_mark_finished = (req, res) => {
    const id = req.params.id;
    Book.findByIdAndUpdate(id, {finished: true})
    .then(result => {
        res.json({redirect: '/books'});
    })
    .catch(err => {
        console.log(err);
    })
}

const book_finished_books = (req, res) => {
    Book.find().sort({createdAt: -1})
    .then(result => {
        res.render('finished_books', {finished_books: result, title: 'Finished Books'});
    })
    .catch(err => {
        console.log(err);
    })
}

const book_update = (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  Book.findByIdAndUpdate(id, req.body)
  .then(result => {
    res.json({redirect: '/books'});
  })
  .catch(err => {
    console.log(err);
  });
}

const book_search_books = (req, res) => {
  res.render('search_book');
}





module.exports = {
    book_index,
    book_details,
    book_create_get,
    book_create_post,
    book_delete,
    book_mark_finished,
    book_finished_books,
    book_update,
    book_search_books,


}