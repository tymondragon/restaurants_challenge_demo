const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
require('dotenv').config({
  path: require('path').join(__dirname, envFile)
});

const migrations = {
  directory: './db/migrations'
}

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/roster-restaurants',
    migrations,
    seeds: {
      directory: './db/seeds'
    }
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/roster-restuarants-test',
    migrations
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations,
    seeds: {
      directory: './db/seeds'
    }
  }
}