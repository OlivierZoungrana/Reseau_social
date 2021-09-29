let jwt = require('jsonwebtoken')
const JWT_SIGN_SECRET= "secret"
require('dotenv').config()

module.exports ={
    generateTokenForuser: function(userData){
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })

    },

    parseAuthorization : function(authorization){
        return (authorization!= null)? authorization.replace('Bearer ', ''):null

    },
    getUserId:function(authorization){
        let userId=-1;
        let token = module.exports.parseAuthorization(authorization)

        if(token!=null){
            try{
                let jwToken = jwt.verify(token, JWT_SIGN_SECRET);
                if(jwToken!=null)
                userId = jwToken.userId
            }catch(err){}
        }
        return userId;

    }
}