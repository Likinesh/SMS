import mongoose from "mongoose";

const examResult_schema = new mongoose.Schema(
    {
        student:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Students',
            required:true
        },
        exam:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Exam',
            required:true,
        },
        grade:{
            type:Number,
            required:true,
        },
        score:{
            type:Number,
            required:true,
        },
        passMark:{
            type:Number,
            required:true,
            default:50,
        },
        status:{
            type:String,
            required:true,
            enum:['failed','passed'],
            default:'failed'
        },
        remarks:{
            type:String,
            required:true,
            enum:['Excellent','Good','Poor'],
            default:'Poor'
        },
        position:{
            type:Number,
            required:true
        },
        subject:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'ClassLevel',
        },
        academicTerm:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"AcademicTerm",
        },
        academicYear:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"AcademicYear",
            required:true,
        },
        isPublished:{
            type:Boolean,
            default:false,
        }
    },
    {
        timestamps:true,
    }
);

const ExamResult = mongoose.model('ExamResult',examResult_schema);
export default ExamResult;