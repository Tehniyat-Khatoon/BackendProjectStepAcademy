import  { createEnquiryServices, getEnquiryServices } from "../Services/enquiryService.js";

const createEnquiryForm= async(req,res)=>{
    let {name,contactNumber,emailId,cource,residentialAddress,refrenceIfAny} =req.body
 const data= await createEnquiryServices(name,contactNumber,emailId,cource,residentialAddress,refrenceIfAny)
 console.log(data);
 console.log(res);
 
 res.json({data})
 } 

 const getEnquiryForm = async(req,res)=>{
    const data = await getEnquiryServices()
    res.json({data})
 }

// const createEnquiryForm= async(req,res)=>{
//     let {name,email,message} =req.body
//  const data= await createDataService(name,email,message)
//  console.log(data);
//  console.log(res);
//  res.json({data})

// } 



export  {createEnquiryForm,getEnquiryForm}


