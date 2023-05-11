import express from "express";
import bodyParser from "body-parser";
import AdminModel from "../models/Admin.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const AdminSignUp = (req, res) => {
	res.render("adminsignup.hbs");
};

const AdminSignUpSubmit = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	console.log(JSON.stringify(username));
	console.log(JSON.stringify(password));
	const Admin = new AdminModel({
		name: username,
		password: password,
	});
	Admin.save();
};
export default { AdminSignUp, AdminSignUpSubmit };
