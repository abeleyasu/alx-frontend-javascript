// 2-main.js
import handleResponseFromAPI from './2-then.js';

const promise = Promise.resolve();  // You can change this to Promise.reject() for testing rejection
handleResponseFromAPI(promise);
