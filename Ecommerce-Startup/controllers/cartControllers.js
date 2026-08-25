
const getCartForUser = (req,res)=>{
    const userid = req.params.userid;
    res.send(`Fetching cart for user with ID: ${userid}`);
}

const addProductToCart = (req,res) =>{
    const userid = req.params.userid;
    res.send(`Adding product to cart for user with ID: ${userid}`);
}

module.exports = {
    getCartForUser,
    addProductToCart
}