import userAddmissionForm1Model from "../Models/AddmissionForm1.js"

const admissionServices=async(name,contactNumber,cource,subject,installments,residentialAddress,image)=>{

    const admissiondata=new userAddmissionForm1Model({name,contactNumber,cource,subject,installments,residentialAddress,image})
    await  admissiondata.save() 
    return admissiondata
}
const getAdmissionFormService= async()=>{
    const studentData= await userAddmissionForm1Model.find()
    console.log(studentData);
    return studentData
}
// const getstudentServices=async(name,email,message)=>{
//     const userdata=await userModel.find({
//       // name,
//       mobile,emailId})
  
//    console.log(userdata);
//     return userdata[0].password;
    // }
    export  {admissionServices,getAdmissionFormService}