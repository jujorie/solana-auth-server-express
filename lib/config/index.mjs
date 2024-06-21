import convict from 'convict'
import { config as dotenv } from 'dotenv'

dotenv()

const config = convict({
  port: {
    doc: 'Server port',
    format: 'port',
    env: 'PORT',
    default: 3009
  },
  jwtSecret: {
    doc: 'JWT Secret',
    format: '*',
    env: 'JWT_SECRET',
    default: ''
  },
  environment: {
    doc: 'Environment',
    format: ['development', 'test', 'production'],
    env: 'NODE_ENV',
    default: 'development'
  },
  database: {
    username: {
      doc: 'Database User',
      format: '*',
      env: 'DB_USERNAME',
      default: 'root'
    },
    password: {
      doc: 'Database User password',
      format: '*',
      env: 'DB_PASSWORD',
      default: 'root'
    },
    database: {
      doc: 'Database name',
      format: '*',
      env: 'DB_DATABASE',
      default: 'solana_db'
    },
    host: {
      doc: 'Database Host',
      format: '*',
      env: 'DB_HOST',
      default: '127.0.0.1'
    },
    port: {
      doc: 'Database Host',
      format: 'port',
      env: 'DB_PORT',
      default: 3302
    },
    dialect: {
      doc: 'Database Dialect',
      format: '*',
      env: 'DB_DIALECT',
      default: 'mysql'
    }
  }
})

config.validate({ allowed: 'strict' })

export default config
