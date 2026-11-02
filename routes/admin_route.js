let express = require('express');

let router = express.Router();


// ADMIN LOGIN
// POST: http://localhost:5000/api/admin/login

router.post("/login", (req, res) => {

    console.log(req.body);

    res.send("Admin login successfully");

});


// VIEW USERS
// GET: http://localhost:5000/api/admin/users

router.get("/users", (req, res) => {

    res.send("View users");

});


// VIEW RESTAURANTS
// GET: http://localhost:5000/api/admin/restaurants

router.get("/restaurants", (req, res) => {

    res.send("View restaurants");

});


// ADD RESTAURANT
// POST: http://localhost:5000/api/admin/restaurant/add

router.post("/restaurant/add", (req, res) => {

    console.log(req.body);

    res.send("Restaurant added successfully");

});


// DELETE RESTAURANT
// DELETE: http://localhost:5000/api/admin/restaurant/delete

router.delete("/restaurant/delete", (req, res) => {

    console.log(req.body);

    res.send("Restaurant deleted");

});


// VIEW CATEGORIES
// GET: http://localhost:5000/api/admin/categories

router.get("/categories", (req, res) => {

    res.send("View categories");

});


// ADD CATEGORY
// POST: http://localhost:5000/api/admin/category/add

router.post("/category/add", (req, res) => {

    console.log(req.body);

    res.send("Category added successfully");

});


// DELETE CATEGORY
// DELETE: http://localhost:5000/api/admin/category/delete

router.delete("/category/delete", (req, res) => {

    console.log(req.body);

    res.send("Category deleted");

});


// VIEW MENU ITEMS
// GET: http://localhost:5000/api/admin/menu

router.get("/menu", (req, res) => {

    res.send("View menu items");

});


// DELETE MENU ITEM
// DELETE: http://localhost:5000/api/admin/menu/delete

router.delete("/menu/delete", (req, res) => {

    console.log(req.body);

    res.send("Menu item deleted");

});


// VIEW ORDERS
// GET: http://localhost:5000/api/admin/orders

router.get("/orders", (req, res) => {

    res.send("View orders");

});


// DELETE ORDER
// DELETE: http://localhost:5000/api/admin/order/delete

router.delete("/order/delete", (req, res) => {

    console.log(req.body);

    res.send("Order deleted");

});


module.exports = router;