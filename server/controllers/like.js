
let Model = require('../models')
let jwtUtils= require('../utils/jwt.util');
let asynclib =require('async');

const DISLIKED= 0;
const LIKED = 0;

exports.likePost =(req, res, next)=>{

    var headerAuth = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAuth);


    var messageId = parseInt(req.params.messageId)

    if(messageId<=0){
        return res.status(400).json({'error': 'paramètre non valide'})
    }

    asynclib.waterfall([
        function(done){
           Model.Message.findOne({
               where: {id: messageId}
           })
           .then(function(messageFound){
               done(null, messageFound)
           })
           .catch(function(err){
               return res.status(500).json({'error': "impossible de vérifier le message"})
           });
        },
        function(messageFound, done){
            if(messageFound){
                Model.User.findOne({
                    where:{id:userId}
                })
                .then(function(userFound){
                    done(null, messageFound, userFound)
                })
                .catch(function(err){
                    return res.status(500).json({'error': 'imposible de verifier lutilisateur'})
                });
            }else{
                res.status(404).json({'error': 'post already liked'})
            }
        },
        function(messageFound,userFound, done){
            if(userFound){
                Model.Like.findOne({
                    where: {
                        userId: userId,
                        messageId: messageId
                    }
                })
                .then(function(isUserAlreadyLiked){
                    done(null, messageFound, userFound, isUserAlreadyLiked);
                })
                .catch(function(err){
                    return res.status(500).json({'error': 'unable to verify is user existe déja'})
                })
            }else{
                res.status(404).json({'error': 'user not exist'})
            }
        },
        function(messageFound, userFound, isUserAlreadyLiked, done){
            if(!isUserAlreadyLiked){
                messageFound.addUser(userFound, {isLike:LIKED})
                .then(function(alreadyLikeFound){
                    done(null, messageFound, userFound);
                })
                .catch(function(err){
                    return res.status(500).json({'error': 'unable set user reaction'})
                })
            }else{
                res.status(409).json({'error': 'message already liked'})
            }
        },
        function(messageFound, userFound, done){
            messageFound.update({
                likes: messageFound.likes + 1,
            }).then(function(){
                done(messageFound);
            }).catch(function(err){
                res.status(500).json({'error': 'cannot update like counter'})
            })
        },
    ], function(messageFound){
            if(messageFound){
                return res.status(201).json(messageFound)
            }else{
                return res.status(500).json({'error':'cannot update message'})
            }
    });


}

exports.dislikePost = (req, res, next)=>{


    var headerAuth = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAuth);


    var messageId = parseInt(req.params.messageId)

    if(messageId<=0){
        return res.status(400).json({'error': 'paramètre non valide'})
    }


    var headerAuth = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAuth);


    var messageId = parseInt(req.params.messageId)

    if(messageId<=0){
        return res.status(400).json({'error': 'paramètre non valide'})
    }

  
    asynclib.waterfall([
        function(done) {
           Model.Message.findOne({
             where: { id: messageId }
           })
           .then(function(messageFound) {
             done(null, messageFound);
           })
           .catch(function(err) {
             return res.status(500).json({ 'error': 'unable to verify message' });
           });
         },
         function(messageFound, done) {
           if(messageFound) {
             Model.User.findOne({
               where: { id: userId }
             })
             .then(function(userFound) {
               done(null, messageFound, userFound);
             })
             .catch(function(err) {
               return res.status(500).json({ 'error': 'unable to verify user' });
             });
           } else {
             res.status(404).json({ 'error': 'post already liked' });
           }
         },
         function(messageFound, userFound, done) {
           if(userFound) {
             Model.Like.findOne({
               where: {
                 userId: userId,
                 messageId: messageId
               }
             })
             .then(function(userAlreadyLikedFound) {
                done(null, messageFound, userFound, userAlreadyLikedFound);
             })
             .catch(function(err) {
               return res.status(500).json({ 'error': 'unable to verify is user already liked' });
             });
           } else {
             res.status(404).json({ 'error': 'user not exist' });
           }
         },
         function(messageFound, userFound, userAlreadyLikedFound, done) {
          if(!userAlreadyLikedFound) {
            messageFound.addUser(userFound, { isLike: DISLIKED })
            .then(function (alreadyLikeFound) {
              done(null, messageFound, userFound);
            })
            .catch(function(err) {
              return res.status(500).json({ 'error': 'unable to set user reaction' });
            });
          } else {
            if (userAlreadyLikedFound.isLike === LIKED) {
              userAlreadyLikedFound.update({
                isLike: DISLIKED,
              }).then(function() {
                done(null, messageFound, userFound);
              }).catch(function(err) {
                res.status(500).json({ 'error': 'cannot update user reaction' });
              });
            } else {
              res.status(409).json({ 'error': 'message already disliked' });
            }
          }
         },
         function(messageFound, userFound, done) {
           messageFound.update({
             likes: messageFound.likes - 1,
           }).then(function() {
             done(messageFound);
           }).catch(function(err) {
             res.status(500).json({ 'error': 'cannot update message like counter' });
           });
         },
       ], function(messageFound) {
         if (messageFound) {
           return res.status(201).json(messageFound);
         } else {
           return res.status(500).json({ 'error': 'cannot update message' });
         }
     });
}





