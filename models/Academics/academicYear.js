import mongoose from "mongoose";

const AcademicYear_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fromYear:{
        type:Date,
        required:true
    },
    toYear:{
        type:Date,
        required:true
    },
    isCurrent:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true,
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Students',
        }
    ],
    teachers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Professors'
        }
    ],
    //Finance if req
},
{
    timestamps:true,
});

const Academic_Year = mongoose.model('AcademicYear',AcademicYear_schema);
export default Academic_Year