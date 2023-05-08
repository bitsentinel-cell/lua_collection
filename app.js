import express from "express";
import { AdminRoute } from "./routes/AdminRoutes.js";
import hbs from "hbs";
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
