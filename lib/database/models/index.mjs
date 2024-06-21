import fs from 'node:fs'
import path from 'node:path'
import Sequelize, { DataTypes } from 'sequelize'
import { fileURLToPath } from 'node:url'

import config from '../../config/index.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = config.get('database')

const models = {}

const sequelize = new Sequelize(db.database, db.username, db.password, db)
const basename = path.basename(__filename)

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-4) === '.mjs' &&
      file.indexOf('.test.mjs') === -1
    )
  })
  .forEach(file => {
    const modelFilename = path.join(__dirname, file)
    import(modelFilename).then((fn) => {
      const model = fn.default(sequelize, DataTypes)
      models[model.name] = model
      console.info('Load model', model.name)
    })
  })

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

export default models
