const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send('<h1>Here is the list of all users.</h1>');
})

router.post('/',(req,res)=>{
    const newuser = req.body;
    console.log(newuser);
    res.status(201).json({
        message:'A new user has been added.',
        data: newuser
    });
});

module.exports = router;
