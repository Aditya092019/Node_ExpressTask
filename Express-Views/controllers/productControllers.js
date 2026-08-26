

const postProducts = (req,res) => {
    console.log(req.body);
    const data = req.body;
    res.json({value:data.productName});
}

module.exports = {
    postProducts
}