const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    class : {
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('student',studentSchema)