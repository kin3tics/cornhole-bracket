import mongoose from 'mongoose';

var bracketSchema = new mongoose.Schema({
	type: Number, //0 = winner bracket; 1 loser bracket; 2 championship
	bracketId: mongoose.Schema.ObjectId,
	rounds: [{ type : mongoose.Schema.ObjectId, ref: 'Round' }]
});

export default mongoose.model('Bracket', bracketSchema);