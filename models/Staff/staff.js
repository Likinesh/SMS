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
        default:'Admin'
    },
},
{
    timestamps:true
});

// Hash Password
staff_schema.pre("save",async function(next){

    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

//decrypt
staff_schema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}


const Admin = mongoose.model('Admin',staff_schema);
export default Admin