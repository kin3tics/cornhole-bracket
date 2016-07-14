import mongoose from 'mongoose';

var teamSchema = new mongoose.Schema({
	teamId: mongoose.Schema.ObjectId,
	seed: Number,
	teamName: String,
	players: [String],
	//Optional
	icon: Number
});

export default mongoose.model('Team', teamSchema);