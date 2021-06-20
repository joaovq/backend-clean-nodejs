require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

module.exports = {
  host: process.env.DATABASE_HOST || 'localhost',
  username: process.env.DATABASE_USER || 'projetei',
  password: process.env.DATABASE_PASSWORD || 'projetei',
  logging: process.env.DATABASE_LOGS === 'true',
  dialect: process.env.DB_DIALECT || 'sqlite',
  port: process.env.DATABASE_PORT || 3306,
  storage: process.env.DATABASE_PATH || './src/test/database.sqlite',
  database: process.env.DATABASE_NAME || 'test',
  define: {
    underscored: true,
    underscoredAll: true,
  }
}
