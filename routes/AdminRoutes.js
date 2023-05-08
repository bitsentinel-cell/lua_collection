import AdminController from "../controllers/AdminController.js";
import express from "express";
const AdminRoute = express.Router();

AdminRoute.get("/AdminPanel", AdminController);

export { AdminRoute };
