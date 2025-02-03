import mongoose from "mongoose";

const YearGroup_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true,
    },
    academicYear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AcademicYear",
        required:true
    },
},{
    timestamps:true
});

const YearGroup = mongoose.model('YearGroup',YearGroup_schema);
export default YearGroup;