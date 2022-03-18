const dotenv = require('dotenv');
dotenv.config({ path: '.env.staging.local' });
console.log('Hello World');

const bob = process.env.DB_USERNAME;
const mary = process.env.DB_PASSWORD;

console.log('Bob=', bob);
console.log('Mary=', mary);
