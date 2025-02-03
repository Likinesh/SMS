import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const Student_schema = new mongoose.Schema({
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
    studentId:{
        type:String,
        required:true,
        default:function(){
            return (
                "S"+Math.floor(100+Math.random()*900)+Date.now().toString().slice(2,4)+
            this.name.splite('').map(name=> name[0]).join('').toUpperCase()
            )
        }
    },
    isWithdraw:{
        type:boolean,
        default:false
    },
    isSuspended:{
        type:boolean,
        default:false
    },
    role:{
        type:String,
        default:'student'
    },
    classLevels:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ClassLevel',
        required:true,
    }],
    currentClassLEvel:{
        type:String,
        default:function(){
            return this.classLevels[this.classLevels.length-1];
        }
    },
    academicYear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AcademicYear",
        required:true
    },
    dateAdmit:{
        type:Date,
        required:true
    },
    examResults:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ExamResult"
    }],
    program:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Program',
        required:true
    },
    isPromotedTo200:{
        type:boolean,
        default:false
    },
    isPromotedTo300:{
        type:boolean,
        default:false
    },
    isPromotedTo400:{
        type:boolean,
        default:false
    },
    isGraduate:{
        type:boolean,
        default:false
    },
    nickName:{
        type:String,
    },
    // behaviorReport:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'BehaviorReport'
    //     }
    // ],
    // financeReport:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'FinanceReport'
    //     }
    // ]
    yearGraduated:{
        type:String,
    }
},
{
    timestamps:true
})

const Student = mongoose.model('Students',Student_schema);
export default Student