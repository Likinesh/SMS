import mongoose from "mongoose";

const question_schema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    questionA:{
        type:String,
        required:true
    },
    questionB:{
        type:String,
        required:true
    },
    questionC:{
        type:String,
        required:true
    },
    questionD:{
        type:String,
        required:true
    },
    correctAnswer:{
        type:String,
        required:true
    },
    isCorrect:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Professors",
        required:true,
    },
},{
    timestamps:true
});

const Question = mongoose.model('Question',question_schema);
export default Question;