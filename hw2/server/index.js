const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const categoriesRoutes = require('./routes/categories');
const tagsRoutes = require('./routes/tags');
const authorsRoutes = require('./routes/authors');

const app = express();

app.use(bodyParser.json());

app.use(postsRoutes);

app.use(categoriesRoutes);

app.use(tagsRoutes);

app.use(authorsRoutes);

app.get('/', (req, res) => {
    res.send('Homepage');
})

const url = 'mongodb+srv://root:atlantis@cluster0.vjftv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, (error) => {
    if (error) {
        console.log(error);
        return
    }
    console.log('Connection established');

    app.listen(3000, () => {
        console.log('Server is running');
    })
})
