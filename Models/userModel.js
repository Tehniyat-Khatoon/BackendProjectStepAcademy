import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// const saltRounds = 10;

const userSchema=new mongoose.Schema({
    Fname:{type:String,require:true},
    lname:{type:String,require:true},
    mobile:{type:mongoose.Decimal128,min:10,max:12,require:true},
    emailId:{type:String,require:true}
    

});

const userModel=mongoose.model('user',userSchema)
// const myPlaintextPassword =  'password';


// const hashpassword=  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     const doc=new  userModel({
//       name:'ramu',
//       emailId:'ramu@gmail.com',
//       mobile:99873662,
//       password:hashpassword
//     })
//     doc.save()
//        console.log(hash);})
   
      

export default userModel
