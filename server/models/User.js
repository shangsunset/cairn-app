import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  fbID: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  picture: String
});


const User = mongoose.model('User', userSchema);
export default User;
