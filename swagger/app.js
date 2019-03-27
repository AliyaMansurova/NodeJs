import SwaggerExpress from 'swagger-express-mw';
import express from 'express';
import bodyParser from 'body-parser';
import queryParser from './api/middlewares/query-parser';
import { mongo_uri, mongo_db } from './config/config.json';

const mongoose = require('mongoose');

const app = express();
app.use(queryParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const config = {
  appRoot: __dirname,
};
const URL = `${mongo_uri}/${mongo_db}`;

mongoose.connect(URL, { useNewUrlParser: true });

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`App running on http://127.0.0.1:${port}`));
});
