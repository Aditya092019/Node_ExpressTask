const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Fetching all users</h1>');
})

router.post('/', (req,res)=>{
    res.send('Adding a new user');
})

router.get('/:id', (req,res)=>{
    const userid = req.params.id;
    res.send(`Fetching a new user with ID: ${userid}`);
})




module.exports = router;