import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const messageSchema = new Schema({
  content: String,
  location: { coordinates: [Number] }
});

const Message = mongoose.model('Message', messageSchema);
export default Message;
