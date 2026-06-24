import express from "express";
import { clerkMiddleware ,requireAuth} from "@clerk/express";
import {
  confirmPayment,
  createAppointment,
  getAppointments,
  getAppointmentsByPatient,
  cancelAppointment,
  getAppointmentByDoctor,
  getRegisteredUserCount,
  updateAppointment,
  getStats,
} from "../controllers/AppointmentController.js";
import { verifyClerkToken } from "../middlewares/verifyClerkToken.js";

const appointmentRouter = express.Router();

appointmentRouter.get("/",getAppointments);
appointmentRouter.get("/confirm",confirmPayment);
appointmentRouter.get("/stats/summary",getStats);

//authenticate routes
appointmentRouter.post('/',verifyClerkToken,createAppointment);
appointmentRouter.get('/me',verifyClerkToken,getAppointmentsByPatient);
appointmentRouter.get('/doctor/:doctorId',getAppointmentByDoctor);
appointmentRouter.post('/:id/cancel', cancelAppointment);
appointmentRouter.get('/patients/count',getRegisteredUserCount)
appointmentRouter.put('/:id',updateAppointment)

export default appointmentRouter;