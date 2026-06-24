import express from "express";
import { verifyClerkToken } from "../middlewares/verifyClerkToken.js";
import { clerkMiddleware,requireAuth } from "@clerk/express";

import { cancelServiceAppointment, confirmServicePayment, createServiceAppointment, getServiceAppointmentById, getServiceAppointments, getServiceAppointmentsBytPatient, getServiceAppointmentStats, updateServiceAppointment } from "../controllers/serviceAppointmentController.js";

const serviceAppointmentRouter = express.Router();

console.log("yessss service-appointments come request");

serviceAppointmentRouter.use((req, res, next) => {
  console.log("🔥 Router reached:", req.method, req.originalUrl);
  next();
});


serviceAppointmentRouter.get("/",getServiceAppointments);
serviceAppointmentRouter.get("/confirm",confirmServicePayment);
serviceAppointmentRouter.get("/stats/summary",getServiceAppointmentStats);
serviceAppointmentRouter.post("/", verifyClerkToken, createServiceAppointment);
serviceAppointmentRouter.get("/me",verifyClerkToken ,getServiceAppointmentsBytPatient);
serviceAppointmentRouter.get("/:id",getServiceAppointmentById);
serviceAppointmentRouter.put("/:id",updateServiceAppointment);
serviceAppointmentRouter.post("/:id/cancel",cancelServiceAppointment);

export default serviceAppointmentRouter;
