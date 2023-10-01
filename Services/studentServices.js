import studentModel from "../Models/studentModel.js"

const createDataService=async(name,email,message)=>{

    const studentdata=new studentModel({name,email,message})
    await  studentdata.save() 
    return studentdata
}


const getStudentServices= async()=>{
    const studentData= await studentModel.find()
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
    export  {createDataService,getStudentServices}