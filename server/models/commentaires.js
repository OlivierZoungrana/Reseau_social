'use strict'
require('dotenv').config()

module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Commentaire', {
    comment: DataTypes.STRING,
   
  },{
    classMethods: {
      associate: function(models){
        models.Commentaire.belongsTo(models.User, {
          foreignKey:{
            allowNull: false
          }
        })
        models.Commentaire.belongsTo(models.Message, {
          foreignKey:{
            allowNull: false
          }
        })
      }
    }
  })
}

