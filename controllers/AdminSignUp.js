import express from "express";
import bodyParser from "body-parser";
import Admin from "../models/Admin.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const AdminSignUp = (req, res) => {
	res.render("adminsignup.hbs");
};

const AdminSignUpSubmit = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const AdminModel = new Admin({
		name: username,
		password: password,
	});
	AdminModel.save();
	return res.render("adminlogin.hbs");
};
export default { AdminSignUp, AdminSignUpSubmit };
