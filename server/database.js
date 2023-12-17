const Pool = require('pg').Pool;

const pool = new Pool ({
  host: 'localhost',
  user: 'postgres',
  port: 5433,
  password: 'jppineda2002',
  database: 'Power Pat Girls'
});

module.exports = pool;