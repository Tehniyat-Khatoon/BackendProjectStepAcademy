import express from 'express'
import  { createEnquiryForm, getEnquiryForm } from '../Controllers/enquiryFormController.js'

const enquiryFormRouter=express.Router()


enquiryFormRouter.get('/',getEnquiryForm)
enquiryFormRouter.post('/',createEnquiryForm)
// enquiryFormRouter.get('/:id',enquiryFormController.getSingleDocById)
// enquiryFormRouter.put('/:id',enquiryFormController.updateDocById)
// enquiryFormRouter.delete('/:id',enquiryFormController.deleteDocById)




export default enquiryFormRouter