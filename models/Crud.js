const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema( {
    name : {
        type : String
    },
    gender :{
        type : String
    },
    address : {
        type : String
    },
    phone : {
        type : Number
    }
})

const Crud = new mongoose.model("crud",crudSchema);

module.exports = Crud;