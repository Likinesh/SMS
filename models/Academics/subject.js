import mongoose from "mongoose";

const subject_schema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    professor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Professors'
    },
    academicTerm:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AcademicTerm',
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true,
    },
    duration:{
        type:String,
        required:true,
        default:'3 months',
    }
},{
    timestamps:true,
})

const Subject_model = mongoose.model('Subject',subject_schema);
export default Subject_model;