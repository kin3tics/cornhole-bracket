import mongoose from 'mongoose';

var roundSchema = new mongoose.Schema({
	round: Number,
	bracket: Number,
	roundId: mongoose.Schema.ObjectId,
	games: [{ type : mongoose.Schema.ObjectId, ref: 'Game' }]
});

export default mongoose.model('Round', roundSchema);