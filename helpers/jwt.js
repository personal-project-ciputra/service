const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')

const createToken = async (data) => {
    const token = await jwt.sign({...data}, JWT_SECRET);
    return token;
}

const verifyToken = async (req, res, next) => {
    const bearerHeader = req.headers['Authorization'];

    if(!bearerHeader){
        res.send('No Token');
    }
    try{
        if(bearerHeader !== undefined){
            const token = bearerHeader.split(' ')[1];
            const validateToken = jwt.verify(token, JWT_SECRET);
            if(validateToken !== undefined){
                req.token = validateToken;
                next();
            }
        }
    }
    catch(error){
      res.send({message:error});
    }
};

module.exports = {createToken, verifyToken};