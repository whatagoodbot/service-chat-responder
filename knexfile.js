export default {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.HOST_TOOL_DB,
      database: process.env.DATABASE_SERVICE_CHAT_RESPONDER,
      user: process.env.USERNAME_TOOL_DB,
      password: process.env.PASSWORD_TOOL_DB,
      charset: 'utf8mb4'
    },
    migrations: {
      directory: './migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.HOST_TOOL_DB,
      database: process.env.DATABASE_SERVICE_CHAT_RESPONDER,
      user: process.env.USERNAME_TOOL_DB,
      password: process.env.PASSWORD_TOOL_DB,
      charset: 'utf8mb4'
    },
    migrations: {
      directory: './migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
