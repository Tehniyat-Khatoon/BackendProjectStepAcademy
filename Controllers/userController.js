import { userServices, getuserServices, userDataServices } from "../Services/userServices.js";


const userController = async ( req,res ) => {
   let {name, mobile, emailId, password}=req.body
  
   const data = await userDataServices (name, mobile, emailId, password)
   // console.log(data);
   // console.log(res);

   res.json({ data })
}








const getUserPassword = async (req, res) => {
   let { name, mobile, emailId } = req.body

   const data = await getuserServices(name, mobile, emailId, password);

   //  const myPlaintextPassword =  data;
   //  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
   console.log(data);
  



}



const userData = async (req, res) => {
   try {
      // const result = await userDataServices.find()
      // res.send(result)
      // let { name, mobile, emailId, password } = req.body
      const data = await userServices()
      console.log(data);
      // console.log(res);
      res.json({data})
     return data
   } catch (error) {
      console.log(error);
   }
}





export { userController, getUserPassword, userData }