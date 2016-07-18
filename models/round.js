import mongoose from 'mongoose';

var roundSchema = new mongoose.Schema({
	round: Number,
	roundId: mongoose.Schema.ObjectId,
	games: [{ type : mongoose.Schema.ObjectId, ref: 'Game' }]
});

export default mongoose.model('Round', roundSchema);