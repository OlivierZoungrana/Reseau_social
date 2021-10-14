'use strict'

const { sequelize } = require(".")

module.exports =(sequelize, DataTypes)=>{
  var Commentaire = sequelize.define('Commentaire', {
    comment: DataTypes.STRING,

    messageId:{
      type: DataTypes.INTEGER,
      references:{
        model: 'Message',
        key:'id'
      }
    },
    userId:{
      type: DataTypes.INTEGER,
      references:{
        model: 'User',
        key: 'id'
      }
    }
  },{});
  Commentaire.associate = function(models){

    models.User.belongsToMany(models.Message, {
      through: models.Commentaire,
      foreignKey:'userId',
      otherKey: 'messageId',
    });
    models.Message.belongsToMany(models.User,{
      through: models.Commentaire,
      foreignKey: 'messageId',
      otherKey: 'userId',
    });
    models.Commentaire.belongsTo(models.User,{
      foreignKey: 'userId',
      as: 'user'
    });
    models.Commentaire.belongsTo(models.Message, {
      foreignKey: 'messageId',
      as: 'message',

    });

  };

  return Commentaire;
}