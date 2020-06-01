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