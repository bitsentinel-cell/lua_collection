import express from "express";
import { AdminRoute } from "./routes/AdminRoutes.js";
import hbs from "hbs";
import mongoose from "mongoose";
import passport from "passport";
import bodyParser from "body-parser";
import LocalStrategy from "passport-local";
import session from "express-session";
import Admin from "./models/Admin.js";
const app = express();
const port = 3000;
app.use(express.static("public"));

app.set("view engine", hbs);
app.set("views", "./views");

app.get("/", (req, res) => {
	res.send("hello");
});

app.use(AdminRoute);

app.listen(port, () => {
	console.log("server is up and running");
});
