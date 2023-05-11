import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/lua_collection");

// try {
// 	await mongoose.connect("mongodb://127.0.0.1:27017/lua_collection");
// } catch (error) {
// 	handleError(error);
// }

const AdminSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
});

const Admin = new mongoose.model("Admin", AdminSchema);

export default { Admin };
