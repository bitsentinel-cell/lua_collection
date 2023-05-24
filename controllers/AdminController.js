import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const AdminAuth = (req, res, next) => {
	res.render("adminlogin.hbs");
};

const AdminLogin = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	console.log(JSON.stringify(username));
	console.log(JSON.stringify(password));
};




export default { AdminLogin, AdminAuth };
