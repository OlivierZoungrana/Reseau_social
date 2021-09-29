'use strict'
require('dotenv').config()

module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('User', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  },{
    classMethods: {
      associate: function(models){
        models.User.hasMany(models.Message)

      }
    }
  })
}

