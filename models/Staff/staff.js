import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

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
        default:'admin'
    },
    academicTerms:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"AcademicTerm",
        }
    ],
    academicYears:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"AcademicYear",
        }
    ],
    classLevels:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ClassLevel",
        }
    ],
    professor:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Professors",
        }
    ],
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Students",
        }
    ],
},
{
    timestamps:true
});


const Admin = mongoose.model('Admin',staff_schema);
export default Admin