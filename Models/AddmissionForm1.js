import mongoose from "mongoose"

const AddmissionForm1Schema = new mongoose.Schema ( {

    name:{type:String,required:true,trim:true},
    contactNumber:{type:mongoose.Decimal128,min:10,max:12,require:true},
    cource:{type:String,require:true},
    subject:{type:String,require:true},
    image:{type:String,require:true},
    installments:{type:mongoose.Decimal128,min:10,max:11,require:true},
    residentialAddress:{type:String,require:true},
    


})

const userAddmissionForm1Model=mongoose.model('AdmissionForm',AddmissionForm1Schema)

export default userAddmissionForm1Model