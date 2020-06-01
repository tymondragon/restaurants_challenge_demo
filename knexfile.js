const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
require('dotenv').config({
  path: require('path').join(__dirname, envFile)
});

const migrations = {
  directory: './server/migrations'
}

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/roster-restuarants'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/roster-restuarants-test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}