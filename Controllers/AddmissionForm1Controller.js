
import  {admissionServices, getAdmissionFormService } from "../Services/admisionService.js";



    const createAdmissionForm= async(req,res)=>{
        let {name,contactNumber,cource,subject,installments,residentialAddress,image} =req.body
     const data= await admissionServices(name,contactNumber,cource,subject,installments,residentialAddress,image)
   //   console.log(data);
   //   console.log(res);
     res.json({data})
     } 
  
     const getAdmissionForm = async(req,res)=>{
        const data = await getAdmissionFormService()
        res.json({data})
     }



export  {createAdmissionForm,getAdmissionForm}


