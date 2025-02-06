import jwt from "jsonwebtoken"

export default generateToken=id =>{
    return jwt.sign({id},'Key',{expiresIn:"1d"});
};