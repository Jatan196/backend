 import express from "express"; // (2nd ->> way)change in package.json
 import dotenv from "dotenv";
 import connectDB from "./config/database.js";
 import cookieParser from "cookie-parser";
 import userRoute from "./routes/userRoute.js";
 import messageRoute from "./routes/messageRoute.js"
 import cors from "cors"; //* for api
 import {app,server} from "./socket/socket.js"
//  import {BASE_URLf} from process.env

 dotenv.config({});

// const app = express();
const PORT= process.env.PORT || 8080 ; // it will listen to port alloted to backend through proces.env(deploy)
const FRONTEND_URL=process.env.BASE_URLf || 'http://localhost:3000';
// middleware
app.use(express.urlencoded({extended:true}));    // why ?? //* for api
app.use(express.json());
app.use(cookieParser()); // imp for using token from cookie 

const coresOption={
    origin:`${FRONTEND_URL}`,
    credentials:true
};
app.use(cors(coresOption));//* for api
// routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute);
// api link will form like --> 
// http://localhost:8080/api/v1/user/register , this register will add from userRoute that we have passed

// change at time of socket io
server.listen(PORT,()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
 })  








 