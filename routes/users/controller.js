const {User} = require('../../models');
const {hash, compare} = require('../../helpers');
const { createToken } = require('../../helpers/jwt');

module.exports = {
    register: async (req,res) => {
        try{
            const checkRegister = await User.findOne({email:req.body.email}).exec();
            if(checkRegister){
                res.send({message:'Email already registered'});
            }
            else{
                const password = req.body.password;
                const hashed = await hash(password)

                const result = await User.create({...req.body, password:hashed});
                res.status(200).send({message:'Email Succesfuly Register', data:result});
            }

        }
        catch(error){
            res.status(403).send({message:error})
        }   
    },
    login: async (req,res) => {
            try{
                const checkRegister = await User.findOne({email:req.body.email}).exec();
                if(checkRegister !==null){
                    const compared = await compare(password, checkRegister.password)
                    if(compared === true){
                        const token = await createToken({
                            id: checkRegister.id,
                            username:checkRegister.username,
                            email:checkRegister.email
                        })
                        res.status(200).send({message:'login success', result:token})
                    }
                    else{
                        res.status(403).send({message:'email or password incorrect'})
                    }
                }
                else{
                    res.status(403).send({message:'email not registered'})
                }
            }
            catch(error){
                res.send({message:error})
            }
    },
    get: async (req,res) => {
        try{
            const result = await User.find();
            res.send(result)
        }
        catch(error){
            res.send(error)
        }
    }
}