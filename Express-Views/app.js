const express = require('express');
const app = express();
const path = require('path');

app.get('/api/products', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/products.html'));
})

app.listen(4000, ()=>{
    console.log("Server is up and running on port 4000!");
})