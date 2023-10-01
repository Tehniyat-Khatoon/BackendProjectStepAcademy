import mongoose from 'mongoose'

// defining schema

const studentSchema = new mongoose.Schema({
    name: {type:String,required:true,trim:true},
    email:{type:String,require:true},
    message:{type:String,min:10,max:900,require:true}
   
})

//model

const studentModel = mongoose.model("student",studentSchema)


export default studentModel