const jws = require('jsonwebtoken');
const secretKey = 'hello123';

const authenticateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    if(authHeader && authHeader.startsWith('Bearer ')){
        const token = authHeader.replace('Bearer', '');

        if(!token){
            return res.sendStatus(401);
        }

        jwt.verify(token, secretKey,(err, user)=>{
            if(err){
                console.log(err)
                    return res.sendStatus(403);
                }
                req.user  = user;
                return next();
        });

    }else{
        return res.sendStatus(404);
    }
};

module.exports = authenticateToken;