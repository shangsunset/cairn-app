import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const messageSchema = new Schema({
  content: String,
  coordinates: [Number],
  createAt: Date,
  user: {type: Number, ref: 'User'}
});

const Message = mongoose.model('Message', messageSchema);
export default Message;
