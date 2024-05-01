const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
	firstName :{
		type:String,
	},
	lasttName :{
		type:String,
	},
	gender: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	},
	about: {
		type: String,
		trim: true,
	},
    branch :{
		type: String,
		trim: true,
	},
    year :{
		type: String,
		trim: true,
	},
	
});

module.exports = mongoose.model("Profile", profileSchema);