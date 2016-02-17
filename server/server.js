import express from 'express';
import routes from './routes';

const app = express();

app.use((req, res, next) => {
  // log each request to the console
  console.log(req.method, req.url);
  next(); 
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

routes(app);

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});

export default app;
