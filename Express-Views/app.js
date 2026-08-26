const express = require('express');
const app = express();
const path = require('path');
const productRouter = require('./routes/productRouter');

app.use(express.static('public'));
app.use(express.json());

app.get('/api/products', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/products.html'));
});

app.use('/api/products', productRouter);

app.listen(4000, ()=>{
    console.log("Server is up and running on port 4000!");
})