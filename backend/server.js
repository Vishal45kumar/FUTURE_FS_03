import express from 'express';
import cors from 'cors';
import 'dotenv/config'; 
import {clerkMiddleware} from '@clerk/express';
import {connectDB} from "./config/db.js";
import doctorRouter from './routes/doctorRoute.js';
import serviceRouter from './routes/serviceRoute.js';
import appointmentRouter from "./routes/appointmentRoute.js";
import serviceAppointmentRouter from './routes/serviceAppointmentRoute.js';

const app = express();
const port = 4000;

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];//backend will connect with only these two ports
//Middlewares
app.use(cors(
    {
        origin: function(origin,callback){
            if(!origin) return callback(null,true);
            if(allowedOrigins.includes(origin)) return callback(null,true);

            return callback(new Error("Not allowed by CORS"))
        },
        credentials:true,
        methods:["GET","POST","DELETE","PUT","OPTIONS"],
        allowHeaders: ["Content-Type","Authorization"]
    }
)) // allows communication between two different ports (here between frontend and backend)

app.use(clerkMiddleware()) // Handles authentication
app.use(express.json({limit:"20mb"})) // converts the json data sent by frontend into javascript object
app.use(express.urlencoded({limit:"20mb",extended:true})) // converts the form data of html files into javascript object

//DB
connectDB();

// app.use((req, res, next) => {
//   console.log("REQ:", req.method, req.url);
//   next();
// });

//Routes
app.use("/api/doctors",doctorRouter)
app.use("/api/services",serviceRouter)
app.use("/api/appointments", appointmentRouter);
app.use("/api/service-appointments",serviceAppointmentRouter)

app.get('/' , (req,res) =>{
    res.send("API Working")
})

app.get("/api/check-auth", (req, res) => {
  console.log("Auth object:", req.auth);

  if (!req.auth || !req.auth.userId) {
    return res.status(401).json({
      success: false,
      message: "No token received or invalid token",
    });
  }

  res.status(200).json({
    success: true,
    message: "Token received successfully",
    userId: req.auth.userId,
  });
});


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})