
const getAllUsers = (req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Fetches all users</h1>');
}

const addUsers = (req,res)=>{
    res.send('Add a new user');
}

const getUsersByID = (req,res)=>{
    const userid = req.params.id;
    res.send(`Fetching a specific user with ID: ${userid}`);
}

module.exports = {
    getAllUsers,
    addUsers,
    getUsersByID
}