import config from './index.mjs'

const environment = config.get('environment')

const database = {
  [`${environment}`]: config.get('database')
}

export default database
