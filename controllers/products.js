const Product = require('../models/product');
const Order = require('../models/order');

const stripe = require("stripe")("sk_test_51IWQUwH8oljXErmds28KftkL6o6jYIcPgYbBdfEmCPSuAlIh0fgoS4NADcCmsIZbdQ3p5nbAeCOcGkSmo38U9BIe00BdOenrqo");

exports.getProducts = (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.render('shop/product-list', {
                products: products,
                pageTitle: "Products",
                path: '/products'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;

    Product.findByPk(productId)
        .then(product => {
            res.render('shop/product-details', {
                product: product,
                pageTitle: product.title,
                path: '/products'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.makePayment = (req, res, next) => {
    console.log('Data: ', req.body);
    const order = {
        product_id: req.body.productId,
        total: req.body.amount,
        stripe_id: req.body.stripeToken
    }
    stripe.customers.create({
        email: req.body.email,
        source: req.body.stripeToken,
    })
        .then((customer) => {
            console.log(customer);
            stripe.charges.create({
                amount: req.body.amount * 100,
                currency: 'usd',
                customer: customer.id,
                description: 'Thank you for purchasing.'
            })
        })
        .then(() => {
            order.status = 'paid';
        })
        .catch(err => {
            order.status = 'failed';
            console.log(err);
        })
        .finally(_ => {
            Order.create(order)
                .then(() => {
                    res.render('shop/payment-success', {
                        product_title: req.body.title,
                        price: req.body.amount,
                        pageTitle: "Thankyou",
                        paymentMethod: req.body.stripeTokenType,
                        status: order.status
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        });
}