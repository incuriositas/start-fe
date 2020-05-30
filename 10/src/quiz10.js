/* eslint-disable no-console */
const avg = require('./avg');
const random = require('./random');

console.log(avg(1, 'a', 2));
console.log(avg([1, 2, 3]));

console.log(random(0, 100));
console.log(random(3));
console.log(random(0, 'a'));
