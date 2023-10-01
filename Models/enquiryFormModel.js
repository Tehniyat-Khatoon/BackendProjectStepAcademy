import mongoose from "mongoose"

const enquiryFormModelSchema = new mongoose.Schema ( {

    name:{type:String,required:true,trim:true},
    contactNumber:{type:mongoose.Decimal128,min:10,max:12,require:true},
    emailId:{type:String,require:true},
    cource:{type:String,require:true},
    residentialAddress:{type:String,require:true},
    refrenceIfAny:{type:String,require:true}


})

const enquiryFormModel=mongoose.model('EnquiryForm',enquiryFormModelSchema)

export default enquiryFormModel