'use strict'

 const { sequelize } = require(".")

module.exports = (sequelize, DataTypes)=>{
  var Message = sequelize.define('Message', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING,
    likes:DataTypes.INTEGER
  },{
    classMethods: {
      associate: function(models){
        models.Message.hasMany(models.Commentaire)

        models.Message.belongsTo(models.User, {
          foreignKey:{
            allowNull: false
          }
        })

      }
    }
  });
  return Message;
}