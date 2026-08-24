const express = require('express');
const app = express();
const studentRouter = require('./routes/student');
const courseRouter = require('./routes/course');

app.use(express.json());

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send('<h1>Welcome to the Student & Course Portal API!</h1>');
})

app.use('/students', studentRouter);
app.use('/courses', courseRouter);

app.use((req,res,next)=>{
    res.setHeader('Content-Type','text/html');
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000!");
})