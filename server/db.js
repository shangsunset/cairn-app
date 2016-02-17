import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/cairndb');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error'));

db.once('open', function callback() {
    console.log("connection with database succeeded.");
});
