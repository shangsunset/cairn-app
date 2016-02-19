import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import users from './routes/user.routes';

const app = express();

mongoose.connect('mongodb://localhost/cairndb', (err, connection) => {
  if (err) {
    throw err;
  }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/users', users);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(process.env.PORT, () => {
  console.log('app listening on port 3000!');
});

export default app;
