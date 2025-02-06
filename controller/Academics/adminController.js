import Admin from '../../models/Staff/staff.js'
import AsyncHandler from 'express-async-handler';
import generateToken from '../../utils/generateToken.js';
import VerifyToken from '../../utils/VerifyToken.js';

// Error handling without try-catch block
export const register = AsyncHandler(async (req,res)=>{
    const {name,email,password} = req.body
        const existing = await Admin.findOne({email});
        if(existing){
            res.json({status:"Fail",error:"Admin already users"});
        }
        const user = await Admin.create({name,email,password});
        res.status(200).json({status:"Success",data:user,msg:'Admin Registered Successful'});
})

export const login = AsyncHandler(async(req,res)=>{
    const {email,password} = req.body;
        const user = await Admin.findOne({email});
        if(!user){
            res.json({status:"Fail",error:"Admin is not registered"});
        }
        const compare = await user.verifyPassword(password)
        if(!compare){
            res.json({status:"Fail",error:"Invalid Password"});
        }
        if(user && compare){
            res.status(200).json({status:"Success",data:generateToken(user._id),msg:'Admin logged in successful'});
        }
})

export const getAllAdmin = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'All admin',msg:'Fetched All admins'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const getAdminById = AsyncHandler(async (req,res)=>{
    const id = req.userAuth._id;
    const admin = await Admin.findById(id).select("name email role");
    if(!admin){
        throw new Error('Admin Not Found');
    }
    else{
        res.status(200).json({status:"Success",data:admin,msg:'Fetched the admin'});
    }
})

export const updateAdmin = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Update Admin',msg:'Updated admin successfully'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
} 

export const deleteAdmin = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Deleted Admin',msg:'Admin Deletion Successful'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const suspendProf = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin Suspend Teacher',msg:'Suspended Teacher Successful'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const unsuspendProf = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin Unsuspend Teacher',msg:'Unsuspend Teacher Successful'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const withdrawProf = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin Withdraw Teacher',msg:'Withdraw Teacher Successful'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const unwithdrawProf = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin un withdraw Teacher',msg:'Un-withdraw Teacher Successful'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const publishExam = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin publish result',msg:'Successful published results'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const unpublishExam = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin unpublish result',msg:'Successful unpublished results'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}