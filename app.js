// import config from './config/config';
// import { User, Product } from './models';
// import DirWatcher from './src/dirwatcher';
// import Importer from './src/importer';
import express from 'express';
import cookieParser from './middlewares/cookie-parser';
import queryParser from './middlewares/query-parser';
import router from './routes';

const app = express();
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