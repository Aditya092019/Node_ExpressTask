const express = require('express');
const router = express.Router();

router.get('/:userid', (req,res)=>{
    const userid = req.params.userid;
    res.send(`Fetching cart for user with ID: ${userid}`);
})

router.post('/:userid', (req,res)=>{
    const userid = req.params.userid;
    res.send(`Adding product to cart for user with ID: ${userid}`);
})

module.exports = router;