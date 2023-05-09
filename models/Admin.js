import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const Schema = mongoose.Schema;

const Admin = new Schema({
	username: {
		type: String,
	},
	password: {
		type: String,
	},
});

Admin.plugin(passportLocalMongoose);

export default mongoose.model("Admin", Admin);
