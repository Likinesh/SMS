import mongoose from "mongoose";
import { type } from "os";

const teacher_Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    dateEmployed:{
        type:Date,
        default:Date.now
    },
    teacherId:{
        type:String,
        required:true,
        default:function(){
            return( 'T'+Math.floor(100+Math.random()*900)+Date.now().toString().slice(2,4)+this.name.splite(' ').map(name=>name[0]).join('').toUpperCase())
        }
    },
    isWithdraw:{
        type:boolean,
        default:false
    },
    //can login but no task
    isSuspended:{
        type:boolean,
        default:false
    },
    role:{
        type:String,
        default:'teacher',
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject',
        required:true
    },
    applicationStatus:{
        type:String,
        enum:['pending','approved','rejected'],
        default:'pending'
    },
    program:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Program',
        required:true
    },
    classLevels:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ClassLevel',
        required:true,
    }],
    academicYear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AcademicYear",
        required:true
    },
    examCreated:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Exam'
        }
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true,
    },
    academicTerm:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AcademicTerm',
        required:true
    }
},
{
    timestamps:true
});

const Professor = mongoose.model('Professors',teacher_Schema);
export default Professor