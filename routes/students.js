const express = require('express');
const router = express.Router()
const student = require('../student')
router.get('/',async(req,res)=>{
    try{
        const students = await student.find()
        res.json(students)
    }catch(err){
        res.send("error")
    }
})

router.post('/',async(req,res)=>{
    const Student = new student({
        name: req.body.name,
        class: req.body.class,
        description: req.bosy.description
    })

    try{
       const a1 =  await student.save()
       res.json(a1)
    }catch(err){
        res.send("error")
    }
})

module.exports = router