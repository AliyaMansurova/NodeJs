// import config from './config/config';
// import { User, Product } from './models';
// import DirWatcher from './src/dirwatcher';
// import Importer from './src/importer';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from './middlewares/cookie-parser';
import queryParser from './middlewares/query-parser';
import router from './routes';
//import { Client } from 'pg';
import Sequelize from 'sequelize';
import { postgres_config, postgres_db, postgres_uri} from './config/config.json';

const app = express();

// const client = new Client(postgres_config);
// client.connect()
//   .then(() => console.log(`Successfully connected to PostgreSQL on ${postgres_uri}`))
//   .catch(err => console.error('connection error', err.stack));
const sequelize = new Sequelize(`${postgres_uri}/${postgres_db}`);
sequelize
  .authenticate()
  .then(() => {
    console.log(`Successfully connected to PostgreSQL with sequelize on ${postgres_uri}/${postgres_db}`);
  })
  .catch(err => {
    console.error(`There was a db connection error\n ${err}`);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser);
app.use(queryParser);
app.use('/api', router);

module.exports = app;

// const dirWatcher = new DirWatcher();
// const importer = new Importer();

// dirWatcher.watch('./data/', 9000);
//
// dirWatcher.on('dirwatcher:changed', fileName => {
//   importer.import(`./data/${fileName}`).then(result => {
//     console.log(result);
//   }).catch(error => console.error(error));
  // const result = importer.importSync(`./data/${fileName}`)
  // console.log(result)
// });

// const user = new User();
// const product = new Product();