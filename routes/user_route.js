let express = require('express');

let router = express.Router();


// USER REGISTER
// POST: http://localhost:5000/api/user/register

router.post("/register", (req, res) => {

    console.log(req.body);

    res.send("User registered successfully");

});


// USER LOGIN
// POST: http://localhost:5000/api/user/login

router.post("/login", (req, res) => {

    console.log(req.body);

    res.send("User login successfully");

});


// VIEW RESTAURANTS
// GET: http://localhost:5000/api/user/restaurants

router.get("/restaurants", (req, res) => {

    res.send("View restaurants");

});


// VIEW CATEGORIES
// GET: http://localhost:5000/api/user/categories

router.get("/categories", (req, res) => {

    res.send("View categories");

});


// VIEW MENU ITEMS
// GET: http://localhost:5000/api/user/menu

router.get("/menu", (req, res) => {

    res.send("View menu items");

});


// VIEW OFFERS
// GET: http://localhost:5000/api/user/offers

router.get("/offers", (req, res) => {

    res.send("View offers");

});


// ADD TO CART
// POST: http://localhost:5000/api/user/cart/add

router.post("/cart/add", (req, res) => {

    console.log(req.body);

    res.send("Item added to cart");

});


// VIEW CART
// GET: http://localhost:5000/api/user/cart

router.get("/cart", (req, res) => {

    res.send("View cart");

});


// DELETE CART
// DELETE: http://localhost:5000/api/user/cart/delete

router.delete("/cart/delete", (req, res) => {

    console.log(req.body);

    res.send("Cart deleted");

});


// ADD ORDER
// POST: http://localhost:5000/api/user/order/add

router.post("/order/add", (req, res) => {

    console.log(req.body);

    res.send("Order added successfully");

});


// VIEW ORDERS
// GET: http://localhost:5000/api/user/orders

router.get("/orders", (req, res) => {

    res.send("View orders");

});


// DELETE ORDER
// DELETE: http://localhost:5000/api/user/order/delete

router.delete("/order/delete", (req, res) => {

    console.log(req.body);

    res.send("Order deleted");

});


module.exports = router;