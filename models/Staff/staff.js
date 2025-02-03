import mongoose from "mongoose";

const staff_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'Admin'
    },
},
{
    timestamps:true
});

const Staff_model = mongoose.model('Staff',staff_schema);
export default Staff_model