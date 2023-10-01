import express from 'express'
import connectDB from './DB/ConnectDb.js';
import studentRouter from './Routes/studentRouter.js';

import bodyParser from 'body-parser';
import addUserRouter from './Routes/userRouter.js';
import addmissionForm1Router from './Routes/addmissionForm1Router.js';
import enquiryFormRouter from './Routes/enquiryFormRouter.js';

import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT || '3000'


//data base connection start
const DATABASE_URL = process.env.DATABASE_URL 

const DBNAME=process.env.DBNAME
connectDB(DATABASE_URL,DBNAME);
//data base connection end

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'))
// NEW UPLOAD
// app.use(function(req, res, next) { //allow cross origin requests
//     res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//     res.header("Access-Control-Allow-Origin", "http://localhost:3002");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", true);
//     next();
// });
//load routes
app.use('/student', studentRouter)
app.use('/user', addUserRouter)
app.use('/admission', addmissionForm1Router)
app.use('/enquiry', enquiryFormRouter)




app.listen(port, () => {
    console.log(`server started at ${port}`);
})