import config from './config/config';
import { User, Product } from './models';

console.log(config.appName);
const user = new User();
const product = new Product();