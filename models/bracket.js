import mongoose from 'mongoose';

var bracketSchema = new mongoose.Schema({
	round: Number,
	bracketId: mongoose.Schema.ObjectId,
	games: [{ type : mongoose.Schema.ObjectId, ref: 'Game' }]
});

export default mongoose.model('Bracket', bracketSchema);