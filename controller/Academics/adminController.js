import Admin from '../../models/Staff/staff.js'

export const register = async(req,res)=>{
    const {name,email,password} = req.body
    try {
        const existing = await Admin.findOne({email});
        if(existing){
            res.json({status:"Fail",error:"Admin already users"});
        }
        const user = await Admin.create({name,email,password});
        res.status(200).json({status:"Success",data:user});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await Admin.findOne({email});
        if(!user){
            res.json({status:"Fail",error:"Admin is not registered"});
        }
        const compare = await user.verifyPassword(password)
        if(!compare){
            res.json({status:"Fail",error:"Invalid Password"});
        }
        if(user && compare){
            res.status(200).json({status:"Success",data:user});
        }
        } 
    catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const getAllAdmin = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'All admin'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const getAdminById = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'single Admin'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const updateAdmin = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Update Admin'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
} 

export const deleteAdmin = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Deleted Admin'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const suspendProf = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin Suspend Teacher'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const unsuspendProf = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin Unsuspend Teacher'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const withdrawProf = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin Withdraw Teacher'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const unwithdrawProf = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin un withdraw Teacher'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const publishExam = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin publish result'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}

export const unpublishExam = (req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin unpublish result'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
}