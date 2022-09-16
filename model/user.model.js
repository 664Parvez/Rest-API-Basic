const mongoose = require('mongoose')

const createSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true
        },
        age : { 
            type : Number,
            require : true
        },
        position : {
            type : String,
            require : true
        }
    }
)

const Createcollection = new mongoose.model('employeeData', createSchema)

module.exports = Createcollection