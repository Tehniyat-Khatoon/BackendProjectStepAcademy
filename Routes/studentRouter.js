import express from 'express'
const studentRouter =express.Router()

import  { createData, getData } from '../Controllers/StudentController.js'




studentRouter.get('/',getData)
studentRouter.post('/',createData)
// studentRouter.get('/:id',StudentController)
// studentRouter.put('/:id',StudentController)
// studentRouter.delete('/:id',StudentController)



export default studentRouter