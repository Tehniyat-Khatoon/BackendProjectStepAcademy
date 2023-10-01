import express from 'express'
import  { createAdmissionForm, getAdmissionForm } from '../Controllers/AddmissionForm1Controller.js'
const addmissionForm1Router=express.Router()


addmissionForm1Router.get('/',getAdmissionForm)
//admin panel
addmissionForm1Router.post('/',createAdmissionForm)
// addmissionForm1Router.get('/:id',AdmissionForm1Controller)
// addmissionForm1Router.put('/:id',AdmissionForm1Controller)
// addmissionForm1Router.delete('/:id',AdmissionForm1Controller)




export default addmissionForm1Router