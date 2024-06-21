'use strict'
import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  User.init({
    address: DataTypes.STRING,
    challenge: DataTypes.STRING
  }, {
    tableName: 'user',
    paranoid: true,
    sequelize,
    modelName: 'User',
    underscored: true
  })
  return User
}
