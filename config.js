const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;
const dbURI = process.env.dbConnectionString;

module.exports = { port, dbURI };
