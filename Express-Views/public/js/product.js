console.log('product js loaded');
function handleSubmit(e){
    e.preventDefault();
    console.log("Submit function called");
    const product = e.target.productName.value;
    const obj = {
        "productName": product
    }

    axios.post('/api/products', obj)
        .then((result) => {
            console.log("Value returned from post request:", result.data.value);
        })
        .catch((error) => {
            console.error("POST request failed:", error);
    });
}