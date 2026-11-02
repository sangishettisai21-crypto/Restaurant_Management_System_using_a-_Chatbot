let express = require('express');

let router = express.Router();


// RESTAURANT REGISTER
// POST: http://localhost:5000/api/restaurant/register

router.post("/register", (req, res) => {

    console.log(req.body);

    res.send("Restaurant registered successfully");

});


// RESTAURANT LOGIN
// POST: http://localhost:5000/api/restaurant/login

router.post("/login", (req, res) => {

    console.log(req.body);

    res.send("Restaurant login successfully");

});


// VIEW RESTAURANT
// GET: http://localhost:5000/api/restaurant/view

router.get("/view", (req, res) => {

    res.send("View restaurant");

});


// UPDATE RESTAURANT
// PUT: http://localhost:5000/api/restaurant/update

router.put("/update", (req, res) => {

    console.log(req.body);

    res.send("Restaurant updated successfully");

});


// ADD CATEGORY
// POST: http://localhost:5000/api/restaurant/category/add

router.post("/category/add", (req, res) => {

    console.log(req.body);

    res.send("Category added successfully");

});


// VIEW CATEGORIES
// GET: http://localhost:5000/api/restaurant/categories

router.get("/categories", (req, res) => {

    res.send("View categories");

});


// DELETE CATEGORY
// DELETE: http://localhost:5000/api/restaurant/category/delete

router.delete("/category/delete", (req, res) => {

    console.log(req.body);

    res.send("Category deleted");

});


// ADD MENU ITEM
// POST: http://localhost:5000/api/restaurant/menu/add

router.post("/menu/add", (req, res) => {

    console.log(req.body);

    res.send("Menu item added successfully");

});


// VIEW MENU ITEMS
// GET: http://localhost:5000/api/restaurant/menu

router.get("/menu", (req, res) => {

    res.send("View menu items");

});


// UPDATE MENU ITEM
// PUT: http://localhost:5000/api/restaurant/menu/update

router.put("/menu/update", (req, res) => {

    console.log(req.body);

    res.send("Menu item updated successfully");

});


// DELETE MENU ITEM
// DELETE: http://localhost:5000/api/restaurant/menu/delete

router.delete("/menu/delete", (req, res) => {

    console.log(req.body);

    res.send("Menu item deleted");

});


// ADD OFFER
// POST: http://localhost:5000/api/restaurant/offer/add

router.post("/offer/add", (req, res) => {

    console.log(req.body);

    res.send("Offer added successfully");

});


// VIEW OFFERS
// GET: http://localhost:5000/api/restaurant/offers

router.get("/offers", (req, res) => {

    res.send("View offers");

});


// DELETE OFFER
// DELETE: http://localhost:5000/api/restaurant/offer/delete

router.delete("/offer/delete", (req, res) => {

    console.log(req.body);

    res.send("Offer deleted");

});


// VIEW ORDERS
// GET: http://localhost:5000/api/restaurant/orders

router.get("/orders", (req, res) => {

    res.send("View orders");

});


// UPDATE ORDER
// PUT: http://localhost:5000/api/restaurant/order/update

router.put("/order/update", (req, res) => {

    console.log(req.body);

    res.send("Order updated successfully");

});


module.exports = router;