const express = require('express');
const router = express.Router();




router.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send('<h1>Here is the list of all orders.</h1>');
})

router.post('/',(req,res)=>{
    const neworder = req.body;
    console.log(neworder);
    res.status(201).json({
        message:'A new order has been created.',
        data: neworder
    });
});

module.exports = router;
