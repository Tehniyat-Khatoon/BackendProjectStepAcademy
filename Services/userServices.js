
// import { model } from "mongoose";
import userModel from "../Models/userModel.js";



const userServices=async()=>{

    const servicedata=await userModel.find()
  //  console.log(servicedata);
    return servicedata
}

const userDataServices=async(name,mobile,emailId,password)=>{
  const userdata= new  userModel({name,mobile,emailId,password})
 await userdata.save()
 return userdata
 
}

const getuserServices=async(name,mobile,emailId)=>{
    const userdata=await userModel.find({
      // name,
      mobile,emailId})
  
  //  console.log(userdata);
    return userdata[0].password;
    
  // const hashpassword=  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // const doc=new  userModel({
  //   name:name,
  //   emailId:emailId,
  //   mobile:mobile,
  //   password:hash
  // })
  //    console.log(hash);})
  //    doc.save()
  //   return doc
}

export {userServices,getuserServices,userDataServices}