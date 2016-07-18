import mongoose from 'mongoose';

var gameSchema = new mongoose.Schema({
	gameId: mongoose.Schema.ObjectId,
	team1: { type: mongoose.Schema.ObjectId, ref: 'Team' },
	team2: { type: mongoose.Schema.ObjectId, ref: 'Team' },
	round: Number,
	index: Number,
	team1Score: Number,
	team2Score: Number,
	gameStatus: Number, //0 = Pending; 1 = In Progress; 2 = Finished
});

export default mongoose.model('Game', gameSchema);