import jwt from 'jsonwebtoken'

export default verifyToken = token =>{
    return jwt.verify(token,'Key',(err,decoded)=>{
        if(err){
            return {msg:'Invalid Token'};
        }
        else{
            return decoded;
        }
    })
}