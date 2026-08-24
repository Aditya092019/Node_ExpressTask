const express = require('express');
const router = express.Router();

const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const studentname = students.map(students=>students.name);
const studentid = students.map(students=> students.id);

router.get('/', (req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(`<h1>Students: ${studentname}</h1>`)
});

router.get('/:id',(req,res)=>{
   const id = req.params.id;
   let boolean = false;
    for(let uid of studentid){
       if(uid == id){
         boolean = true;
         break;
       }
    }
    res.setHeader('Content-Type', 'text/html');
    if(boolean == true){
        const object = students.filter(students => students.id == id);
        const name = object.map(object => object.name);
        res.send(`<h1>Students: ${name}</h1>`); 
    }else{
        res.send('<h1>Student not found</h1>');
    }
});

module.exports = router;