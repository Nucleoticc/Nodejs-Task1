const express = require('express');

const sequelize = require('./utils/database');

const errorController = require('./controllers/error');
const productRoutes = require('./routes/product');
const Product = require('./models/product');
const Order = require('./models/order');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));
app.use(productRoutes);
app.use(errorController.get404);

sequelize.sync()
    // .then(result => {
    //     return Product.create({
    //         title: 'First Product',
    //         description: 'This is the first product',
    //         price: 10,
    //         imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    //     })
    // })
    // .then(result => {
    //     return Product.create({
    //         title: 'Second Product',
    //         description: 'This is the second product',
    //         price: 20,
    //         imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    //     })
    // })
    // .then(result => {
    //     return Product.create({
    //         title: 'Third Product',
    //         description: 'This is the third product',
    //         price: 30,
    //         imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    //     })
    // })
    // .then(result => {
    //     return Product.create({
    //         title: 'Fourth Product',
    //         description: 'This is the fourth product',
    //         price: 40,
    //         imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    //     })
    // })
    // .then(result => {
    //     return Product.create({
    //         title: 'Fifth Product',
    //         description: 'This is the fifth product',
    //         price: 50,
    //         imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    //     })
    // })
    // .then(result => {
    //     return Product.create({
    //         title: 'Sixth Product',
    //         description: 'This is the sixth product',
    //         price: 60,
    //         imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    //     })
    // })
    // .then(result => {
    //     return Product.create({
    //         title: 'Seventh Product',
    //         description: 'This is the seventh product',
    //         price: 70,
    //         imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    //     })
    // })
    .then(_ => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
