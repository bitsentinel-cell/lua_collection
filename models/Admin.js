import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
try {
	await mongoose.connect("mongodb://127.0.0.1:27017/lua_collection");
} catch (error) {
	handleError(error);
}

const AdminSchema = new mongoose.Schema({
	name: {
		type: "string",
		trim: true,
	},
	email: {
		type: "string",
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("please use a valid email");
			}
		},
	},
	password: {
		type: "string",
		required: true,
		minlength: 8,
		trim: true,
	},
});

AdminSchema.pre("save", async function (next) {
	const admin = this;

	if (admin.isModified("password")) {
		admin.password = await bcrypt.hash(admin.password, 8);
	}

	next();
});

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
