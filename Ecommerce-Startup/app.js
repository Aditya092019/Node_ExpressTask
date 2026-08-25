const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(5000, ()=>{
    console.log("Server is up and running at port 5000!")
})