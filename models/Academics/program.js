import mongoose, { Schema } from "mongoose";

const program_schema = new mongoose.Schema({
    // Taken BTech as ref
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    duration:{
        type:String,
        required:true,
        default:"4 years"
    },
    // CSFTY auto generation
    code:{
        type:String,
        default:function(){
            return this.name.split(' ').map(name=>name[0]).join('').toUpperCase();
        }
    },
    //program by
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'Admin',
        required:true,
    },
    //prof assigned
    professors:[
        {
            type:Schema.Types.ObjectId,
            ref:'Professors',
            default:[],
        }
    ],
    //students admitted
    students:[
        {
            type:Schema.Types.ObjectId,
            ref:'Students',
            default:[]
        }
    ],
    //subjects assigned
    subjects:[
        {
            type:Schema.Types.ObjectId,
            ref:'Subjects',
            default:[]
        }
    ]
},
{
    timestamps:true,
});

const Program_model = mongoose.model('Program',program_schema);
export default Program_model