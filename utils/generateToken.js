import jwt from "jsonwebtoken"

export default function generateToken(id){
    return jwt.sign({id},'Key',{expiresIn:"1d"});
};