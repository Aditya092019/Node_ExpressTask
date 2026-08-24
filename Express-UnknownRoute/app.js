const express = require('express');

const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    console.log("Server is up and running on port 4000! Ready to handle requests.");
    next();
});

app.use('/products',(req,res,next)=>{
    console.log("Here are the products.","It's used method is:",req.method);
    next();
})

app.use('/categories',(req,res,next)=>{
    console.log("Here are the categories.","It's used method is:",req.method);
    next();
})

app.get('/products',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    console.log("URL endpoint is:--", req.url);
    res.send('<h1>Here is the list of all products.</h1>');
})

app.get('/categories',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    console.log("URL endpoint is:--", req.url);
    res.send('<h1>Here is the list of all categories.</h1>');
})

app.post('/products',(req,res)=>{
    const neworder = req.body;
    console.log(neworder);
    res.status(201).json({
        message:'A new product has been added.',
        data: neworder
    });
});

app.post('/categories',(req,res)=>{
    const newuser = req.body;
    console.log(newuser);
    res.status(201).json({
        message:'A new category has been created.',
        data: newuser
    });
});

app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});


app.listen(4000, ()=> console.log("Server is running"))

