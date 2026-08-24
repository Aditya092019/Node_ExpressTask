const express = require('express');

const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.");
    next();
});

app.use('/orders',(req,res,next)=>{
    console.log("Here are the orders for the access users.");
    next();
})

app.use('/users',(req,res,next)=>{
    console.log("List of access users");
    next();
})

app.get('/orders',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send('<h1>Here is the list of all orders.</h1>');
})

app.get('/users',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send('<h1>Here is the list of all users.</h1>');
})

app.post('/orders',(req,res)=>{
    const neworder = req.body;
    console.log(neworder);
    res.status(201).json({
        message:'A new order has been created.',
        data: neworder
    });
});

app.post('/users',(req,res)=>{
    const newuser = req.body;
    console.log(newuser);
    res.status(201).json({
        message:'A new user has been added.',
        data: newuser
    });
});

app.listen(3000, ()=> console.log("Server is running"))

