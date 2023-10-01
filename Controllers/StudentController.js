import   { createDataService, getStudentServices } from "../Services/studentServices.js";


 const createData= async(req,res)=>{
    let {name,email,message} =req.body
   //  console.log(`the name is ${name}`)
   //  console.log(`the name is ${email}`)
   //  console.log(`the name is ${message}`)
   //  console.log('hii');


 const data= await createDataService(name,email,message)
//  console.log(data);
//  console.log(res);
 res.json({data})

} 

const getData = async(req,res)=>{
   const data = await getStudentServices()
   res.json({data})
}

 
 

export  {createData,getData}
