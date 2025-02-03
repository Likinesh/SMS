import mongoose from "mongoose";

const connectDB = async(Url) =>{
    try {
        await mongoose.connect(Url).then(()=>{
            console.log("Connection Successful to MongoDB")
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB;