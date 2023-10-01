import  Express  from "express";
const addUserRouter=Express.Router()
import { userController,getUserPassword, userData } from "../Controllers/userController.js";



addUserRouter.post('/addUser',userController)
addUserRouter.post('/getUserPassword',getUserPassword)
addUserRouter.get('/',userData)

// addUserRouter.post('/replace',replacePassword)

export default addUserRouter