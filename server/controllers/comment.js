
let Model = require('../models')
let jwtUtils= require('../utils/jwt.util');
let asynclib =require('async');

const COMENT_LIMIT = 4

exports.createComent =(req, res, next)=>{

    var headerAuth = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAuth);
    var messageId = parseInt(req.params.messageId)

    var comment = req.body.comment;
    
    if(comment==null){
        return res.status(400).json({'error': 'missing parameters'})
    }

    if(comment.length <= COMENT_LIMIT){
        return res.status(400).json({'error': 'invalid parameters'})
    }

    asynclib.waterfall([
        function(done){
            Model.User.findOne({
                where:{id:userId}
            })
            .then(function(userFound){
                done(null, userFound)
            })
            .catch(function(err){
                return res.status(500).json({'error': 'unable to verify'})
            });

        },
        function(userFound, done){
            if(userFound){
                Model.Commentaire.create({
                    comment: comment,
                    userId: userId,
                    messageId:messageId

                })
                .then(function(newComent){
                    done(newComent)
                });
            }else{
                res.status(404).json({'error': 'user not found'})
            }
        },
    ],
    function(newComent){
        if(newComent){
            return res.status(201).json(newComent)
        }else{
            return res.status(500).json({'error': 'cannot post messages'})
        }
});



}

exports.listComent=(req, res, next)=>{
    const id = req.params.messageId
   
    Model.Commentaire.findAll({
        where: {
         messageId: id
        }
    })
    .then((messages)=>{res.status(200).json(messages)})
    .catch((error)=>{res.status(400).json({error:error})})

    // let fields = req.query.fields;
    // let limit = parseInt(req.query.limit)
    // let offset = parseInt(req.query.offset)
    // let order = req.query.order

    // Model.Commentaire.findAll({
    //     order: [(order!= null)? order.split(':'): ['title', 'ASC']],
    //     attributes: (fields !== '*' && fields != null)? fields.split(','):null,
    //     limit: (!isNaN(limit))? offset :null,
    //     offset: (!isNaN(offset))? offset : null,
    //     include :[{
    //         model: Model.User,
    //         attributes: ['username']
    //     }]
    // }).then(function(commentaires){
    //     if(commentaires){
    //         res.status(200).json(commentaires)
    //     }else{
    //         res.status(400).json({'error': 'no comment found'})
    //     }

    // }).catch(function(err){
    //     console.log(err)
    //     res.status(500).json({'error': 'invalid fieds'})
    // })



}