const Crud  = require("../models/Crud")


const insert = async(req,res) => {
    try {
        const {name,gender,address,phone} = req.body ; 

        if(!name || !gender || !address || !phone){
            res.status(400).send({"error" : "All Fields Are Required"})
        }
        else {
            const crud = new Crud({name,gender,address,phone})

            const save = await crud.save()

            if(save) {
                res.status(200).send({"message" : "User Inserted Successfully"})
            }
        }

    } catch (error) {
        console.log(error);
    }
}


const update = async(req,res) => {
    try {
        const _id = req.params.id;
        const update = await Crud.findByIdAndUpdate(_id, req.body,{new : true})

        if (update) {
            res.status(200).send({"message" : "Data updated Successfully"})
        }
        else{
            res.status(404).send({"error" : "No data found"})
        }
    } catch (error) {
        res.status(400).send({"error" : error})
        console.log(error);
    }
}

const deletea = async(req,res) => {
    try {
        const _id = req.params.id;
        const del = await Crud.findByIdAndDelete(_id);

        if (del) {
            res.status(200).send({"message" : "User Deleted Successfully"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({"error" : error})
    }
}

module.exports = {insert, update, deletea}