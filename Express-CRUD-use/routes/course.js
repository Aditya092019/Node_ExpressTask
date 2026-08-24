const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];
const coursesname = courses.map(courses=>courses.name);
const coursesid = courses.map(courses=> courses.id);

router.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(`<h1>Courses: ${coursesname}</h1>`);
});

router.get('/:id', (req,res)=>{
    const id = req.params.id;
    let boolean = false;
    for(let uid of coursesid){
        if(uid == id){
            boolean = true;
            break;
        }
    }
    res.setHeader('Content-Type', 'text/html');
    if(boolean == true){
        const object = courses.filter(courses => courses.id == id);
        const name = object.map(object => object.name);
        const description = object.map(object=>object.description);
        res.send(`<h1>Courses: ${name}, Description: ${description}</h1>`); 
    }else{
        res.send('<h1>Courses not found</h1>');
    }
});


module.exports = router;