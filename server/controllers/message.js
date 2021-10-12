let Model = require('../models')
let asynclib =require('async');
let jwtUtils= require('../utils/jwt.util');
const TITLE_LIMIT = 2
const CONTENT_LIMIT= 4

const ModelMessage = require('../models/message')

exports.createMessage = (req, res, next)=>{

    var headerAuth = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAuth);

    let title = req.body.title;
    let content = req.body.content;

    if(title==null || content ==null){
        return res.status(400).json({'error': 'missing parameters'})
    }

    if(title.length<=TITLE_LIMIT || content.length <=CONTENT_LIMIT){
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
                Model.Message.create({
                    title: title,
                    content: content,
                    likes: 0,
                    UserId: userFound.id

                })
                .then(function(newMessage){
                    done(null, userFound, newMessage)
                });
            }else{
                res.status(404).json({'error': 'user not found'})
            }
        },
    ],
    function(newMessage){
        if(newMessage){
            return res.status(201).json(newMessage)
        }else{
            return res.status(500).json({'error': 'cannot post messages'})
        }
    
});

},

exports.listMessage = (req, res, next)=>{
    let fields = req.query.fields;
    let limit = parseInt(req.query.limit)
    let offset = parseInt(req.query.offset)
    let order = req.query.order

    Model.Message.findAll({
        order: [(order!= null)? order.split(':'): ['title', 'ASC']],
        attributes: (fields !== '*' && fields != null)? fields.split(','):null,
        limit: (!isNaN(limit))? offset :null,
        offset: (!isNaN(offset))? offset : null,
        include :[{
            model: Model.User,
            attributes: ['username']
        }]
    }).then(function(messages){
        if(messages){
            res.status(200).json(messages)
        }else{
            res.status(400).json({'error': 'no message found'})
        }

    }).catch(function(err){
        console.log(err)
        res.status(500).json({'error': 'invalid fieds'})
    })



}

exports.updateMessage =(req, res, next)=>{

}

 exports.deleteMessage=(req, res, next)=>{

 }
