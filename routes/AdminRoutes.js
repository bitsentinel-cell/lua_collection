import AdminController from "../controllers/AdminController.js";
import AdminSignUp from "../controllers/AdminSignUp.js";

import express from "express";
const AdminRoute = express.Router();

AdminRoute.get("/AdminPanel", AdminController.AdminAuth);
AdminRoute.post("/AdminPanel", AdminController.AdminLogin);
AdminRoute.get("/AdminPanel/signup", AdminSignUp.AdminSignUp);
AdminRoute.post("/AdminPanel/signup", AdminSignUp.AdminSignUpSubmit);

export { AdminRoute };
