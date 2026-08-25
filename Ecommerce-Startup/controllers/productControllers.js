
const getProducts = (req,res)=>{
    res.send('Fetching all products');
}

const postProducts = (req,res) =>{
    res.send("Adding a new product");
}

const getProductsByID = (req,res) => {
    const userid = req.params.id;
    res.send(`Fetching a product with ID:${userid}`);
}


module.exports = {
    getProducts,
    postProducts,
    getProductsByID
}