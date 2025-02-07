import AsyncHandler from "express-async-handler";
import Academic_Year from "../../models/Academics/academicYear.js";
import Admin from "../../models/Staff/staff.js";

export const createAcademicYear = AsyncHandler(async(req,res)=>{
    const {name,fromYear,toYear,createdBy} = req.body;
    const academic_Year = await Academic_Year.findOne({name});
    if(academic_Year){
        throw new Error('Academic Year Already Exist')
    }
    const new_acad_year = await Academic_Year.create({name,fromYear,toYear,createdBy:req.userAuth._id});
    const admin = await Admin.findById(req.userAuth._id);
    admin.academicYears.push(new_acad_year);
    await admin.save();
    res.status(201).json({
        status:'Success',
        msg:'Academic Year Created',
        data:new_acad_year
    })
})

export const allacademicYears = AsyncHandler(async(req,res)=>{
    const years = Academic_Year.find();
    res.status(201).json({
        status:'Success',
        msg:'Academic Years Fetched Successfully',
        data:years,
    })
})

export const singleacademicYears = AsyncHandler(async(req,res)=>{
    const year = await Academic_Year.findById(req.params.id);
    res.status(201).json({
        status:'Success',
        msg:'Academic Year Fetched Successfully',
        data:year,
    })
})

export const updateacademicYear = AsyncHandler(async(req,res)=>{
    const {name,fromYear,toYear,createdBy} = req.body;
    const createAcadYear = await Academic_Year.findOne({name});
    if(createAcadYear){
        throw new Error('Academic Year Already exist')
    }
    const acadYear = await Academic_Year.findByIdAndUpdate(req.params.id,{
        name,fromYear,toYear,createdBy:req.userAuth._id
    },{
        new:true
    })
    res.status(201).json({
        status:'Success',
        msg:'Academic Years Updated Successfully',
        data:acadYear,
    })
})

export const deleteAcademicYear = AsyncHandler(async(req,res)=>{
    await Academic_Year.findByIdAndDelete(req.params.id);
    res.status(201).json({
        status:'Success',
        msg:'Academic Year Fetched Successfully',
    });
});
