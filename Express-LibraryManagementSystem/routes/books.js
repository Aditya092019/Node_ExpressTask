const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send('<h1>Here is the list of books!</h1>');
})

router.post("/",(req,res)=>{
    const book = req.body;
    console.log(book);
    res.status(201).json({
        message:'Book has been added!',
        data:book
    })
});

module.exports = router;