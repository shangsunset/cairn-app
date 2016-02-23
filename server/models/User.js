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


userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude'; 

  return this.name;
};

userSchema.pre('save', next => {
  console.log('pre saving');

  next();
});

const User = mongoose.model('User', userSchema);
export default User;
