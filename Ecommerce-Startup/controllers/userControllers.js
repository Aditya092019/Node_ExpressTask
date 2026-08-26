
const getAllUsers = (req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Fetches all users</h1>');
}

const addUsers = (req,res)=>{
    const {name, email} = req.body;
    
    if(!name || !email){
        return res.status(400).json({
            success: false,
            message: "Name and Email are required"
        })
    }

    const user = {id:1, name, email};
    res.status(201).json({
        success: true,
        data: user
    })
    // res.send('Add a new user');
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