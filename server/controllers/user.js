const bcrypt = require('bcrypt')
let jwtUtils = require('../utils/jwt.util')
let Model = require('../models')
let asynclib =require('async');
const cookieParser = require("cookie-parser");

require('dotenv').config()


// REGEX

const EMAIL_REGEX= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX= /^(?=.*\d).{4,8}$/;

exports.register = (req, res, next)=>{

        let email = req.body.email;
        let username =req.body.username;
        let password =req.body.password;
        let bio =req.body.bio;

        if(email==null || username==null|| password==null){
            return res.status(400).json({'error': 'misssing params'})
        }


        // vérifier pseudo length, mail regex et password
        if(username.length>=13 || username.length <=4){
            return res.status(400).json({'error': 'missing parameters'})
        }

        if(!EMAIL_REGEX.test(email)){
            return res.status(400).json({'error': 'email is not valid'})
        }

        if(!PASSWORD_REGEX.test(password)){
            return res.status(400).json({'error': 'password invalid( compris entre 4 et 8 inclure 1 chiffre'})
        }


        Model.User.findOne({
            attributes :['email'],
            where:{email:email}
        })
        .then(function(userFound){

            if(!userFound){
                bcrypt.hash(password, 5, function(err, bcryptedPassword){
                    let newUser = Model.User.create({
                        email: email,
                        username: username,
                        password: bcryptedPassword,
                        bio:bio,
                        isAdmin:0
                    })
                    .then(function(newUser){
                        return res.status(201).json({
                            'userId': newUser.id
                        });
                    })
                    .catch(function(err){
                        return res.status(500).json({'error': 'cannot add user'})
                    })
                });
            }else{
                return res.status(409).json({'error': 'user already exist'})
            }

        })
        .catch(function(err){
            return res.status(500).json({'error': 'unable to verify user'})

        })

}

exports.login = (req, res,next)=>{

    let email = req.body.email;
    let password= req.body.password;

    if(email==null || password== null){
        return res.status(400).json({'error': 'missing parameters'})
    }

    Model.User.findOne({
        where: {email:email}
    })

    .then(function(userFound){
        if(userFound){
            bcrypt.compare(password, userFound.password, function(errBcrypt, resBycrypt){
                if(resBycrypt){
                    return res.status(200).json({
                        'userId': userFound.id,
                        'token': jwtUtils.generateTokenForuser(userFound)
                    })
                
                }else{
                    return res.status(403).json({"error": "invalid password"})
                }
            })
        }else{
            return res.status(404).json({'error': 'user not exist in DB'})
        }
    })
    .catch(function(err){
        return res.status(500).json({'error': 'unable to verify user'})
    })
    console.log(res.token)

}
exports.getUserProfile = (req, res, next)=>{

    var headerAuth = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAuth)

    if(userId<0)
    return res.status(400).json({'error': 'wrong token'})

    Model.User.findOne({
        attributes: ['id', 'email', 'username', 'bio'],
        where: {id:userId}

    }).then(function(user){
        if(user){
            res.status(201).json(user)
        }else{
            res.status(404).json({'error': 'user not found'})
        }
    }).catch(function(err){
        res.status(500).json({'error': 'cannot fetch user'})
    })
}

exports.updateUserProfile = (req, res, next)=>{
    var headerAuth = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAuth);

    var bio = req.body.bio;

    asynclib.waterfall([
        function(done){
            Model.User.findOne({
                attributes: ['id', 'bio'],
                where: {id: userId}
            }).then(function(userFound){
                done(null, userFound)
            })
            .catch(function(err){
                return res.status(500).json({'error': 'uable to verify user'})
            });
        },
        function(userFound, done){
            if(userFound){
                userFound.update({
                    bio: (bio? bio : userFound)
                }).then(function(){
                    done(userFound)
                }).catch(function(err){
                    res.status(500).json({'error': 'cannot update user'})
                })
            }
        }
    ])


}

exports.deleteUserProfile = (req, res, next)=>{

}