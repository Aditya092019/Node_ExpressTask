const productService = require('../services/productService');
const path = require('path');

const getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/productView.html'));
}

const postProducts = (req,res) =>{

    const {name, price} = req.body;
    if(!name || !price){
        return res.status(400).json({
            success: false,
            message: "Name and Price are required"
        })
    }

    const product = {id:1,name,price};
    res.status(201).json({
        success: true,
        data: product
    })
    // const result = productService.addProduct();
    // res.send(result);
}

const getProductByID = (req,res) => {
    const userid = req.params.id;
    const result = productService.getProductByID(userid);
    res.send(result);
}


module.exports = {
    getProducts,
    postProducts,
    getProductByID
}