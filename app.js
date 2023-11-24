const bookRoutes = require('./routes/bookRoutes');
const dotenv = require('dotenv');
dotenv.config();
const dbURI = `${process.env.DBURI}`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoose = require('mongoose');
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true}).then((result) => console.log('connected')).catch((err) => console.log(err));
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.redirect('/books');
})

app.use(bookRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title: 'Page Not Found'});
});

app.listen(8080);