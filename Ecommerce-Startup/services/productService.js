
// const getAllProducts = () => {
//     return 'Fetching all products';
// }

const getProductByID = (id) => {
    return `Fetching a product with ID:${id}`;
}

const addProduct = () => {
    return 'Adding a new product';
}


module.exports = {
    getProductByID,
    addProduct
}