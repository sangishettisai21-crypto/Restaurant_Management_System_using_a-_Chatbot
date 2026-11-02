let express=require('express')
let app=express();
let userroutes=require('./routes/user_route.js');
let adminroutes=require('./routes/admin_route');
let restaurantroutes=require('./routes/restaurant_route');


app.use(express.json());

app.use("/api/user",userroutes);
app.use("/api/admin",adminroutes);
app.use("/api/restaurant",restaurantroutes);

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})