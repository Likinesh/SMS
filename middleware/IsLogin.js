import Admin from "../models/Staff/staff.js";
import VerifyToken from "../utils/VerifyToken.js";

export const isLogin = async (req,res,next) =>{
    const token = req.headers.authorization.split('')[1];
    const verified = await VerifyToken(token);
    if(verified){   
        const user = await Admin.findById(verified.id).select("name email role");
        req.userAuth=user;
        next();
    }else{
        const err = new Error("Token expired/invalid");
        next(err);
    }
}