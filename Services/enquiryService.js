import enquiryFormModel from "../Models/enquiryFormModel.js"

const createEnquiryServices=async(name,contactNumber,emailId,cource,residentialAddress,refrenceIfAny)=>{

    const enquirydata=new enquiryFormModel({name,contactNumber,emailId,cource,residentialAddress,refrenceIfAny})
    await  enquirydata.save() 
    return enquirydata
}

const getEnquiryServices = async(req,res)=>{
    const studentData= await enquiryFormModel.find()
    // console.log(studentData);
    return studentData
}

// const getstudentServices=async(name,email,message)=>{
//     const userdata=await userModel.find({
//       // name,
//       mobile,emailId})
  
//    console.log(userdata);
//     return userdata[0].password;
    // }
    export  {createEnquiryServices,getEnquiryServices}