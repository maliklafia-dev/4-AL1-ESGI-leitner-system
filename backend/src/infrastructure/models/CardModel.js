import mongoose from 'mongoose';

const CardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  tag: { type: String },
  category: { 
    type: String, 
    enum: ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'DONE'], 
    default: 'FIRST' 
  },
  lastAnsweredAt: { type: Date, default: null },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const CardModel = mongoose.model('Card', CardSchema);

export default CardModel;
