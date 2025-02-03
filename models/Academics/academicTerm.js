import mongoose from "mongoose";

const AcademicTerm_schema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    description:{
        type:Date,
        required:true
    },
    duration:{
        type:Date,
        required:true,
        default:'3 months'
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true,
    },
},
{
    timestamps:true,
})

const Academic_Term = mongoose.model('AcademicTerm',AcademicTerm_schema);
export default Academic_Term;