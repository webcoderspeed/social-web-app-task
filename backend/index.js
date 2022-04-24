import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import { allowCors } from './utils/cors.js';
import morgan from 'morgan';
import connectDB from './utils/connectDB.js';
import { notFound, errorHandler } from './middlewares/error.middlewares.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
app.use(morgan('dev'));

// setting up json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// launch server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running on port http://localhost:${PORT}`.magenta.bold
  );

  // connecting to mongoDB database
  connectDB();

  // handling cors
  allowCors(app);

  // setting up the routes
  routes(app);

  // setting up the error handler
  app.use(notFound);
  app.use(errorHandler);
});
