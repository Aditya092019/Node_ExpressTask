const productService = require('../services/productService');

const getProducts = (req,res)=>{
    const result = productService.getAllProducts();
    res.send(result);
}

const postProducts = (req,res) =>{
    const result = productService.addProduct();
    res.send(result);
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