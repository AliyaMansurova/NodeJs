import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from './middlewares/cookie-parser';
import queryParser from './middlewares/query-parser';
import router from './routes';
import { mongo_db, mongo_uri } from './config/config.json';

const URL = `${mongo_uri}/${mongo_db}`;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(URL)
  .then(() => console.log(`Successfully connected to MongoDB on ${mongo_uri}`))
  .catch(err => console.log(`There was a db connection error\n ${err}`));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser);
app.use(queryParser);

app.use('/api', router);

module.exports = app;
