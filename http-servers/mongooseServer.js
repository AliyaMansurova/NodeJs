import express from 'express';
import { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from '../middlewares/cookie-parser';
import queryParser from '../middlewares/query-parser';
import { mongo_db, mongo_uri } from '../config/config.json';
import City from '../models/mongoose/City';

export const URL = `${mongo_uri}/${mongo_db}`;

const mongooseApp = express();

mongooseApp.use(cookieParser);
mongooseApp.use(queryParser);
mongooseApp.use(urlencoded({ extended: false }));
mongooseApp.use(json());

mongooseApp.get('/', (req, res) => {
  mongoose.connect(URL);

  const db = mongoose.connection;

  db.on('error', () => console.log('connection error:'));
  db.once('open', () => {
    City.aggregate([{ $sample: { size: 1 } }], (err, city) => {
      if (err) {
        res.json({ msg: err });
      }
      res.json(city);
    });
  });
});

export { mongooseApp };
