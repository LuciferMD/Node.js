const accountService = require('../Services/accountService')
const userService = require('../Services/userService');
const jwt = require('jsonwebtoken');

const Joi = require('joi');
const bcrypt = require('bcrypt');
const keys = require('../config/keys');

let  accountController = {

    Registration : async function(req, res, next) {
    
    let user = {
      id: req.params.id,
      login : req.body.login,
      password : await bcrypt.hash(req.body.password,10)
    }
    try{
      let newUser = await accountService.Registration(user);
      res.status(200).json(newUser);
    }   
    catch(error){
      next(error);
    }
    },

    Login : async function (req, res, next){
        const candidate = await userService.getByLogin(req.body.login);

        //verification of existence user
        if(candidate){   
          const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
          
          if(passwordResult){
            //generate jwt-token
            const token = jwt.sign({
              userId: candidate.id,
              login: candidate.login
            }, keys.jwt , {expiresIn: 60*60}); //1 hour in seconds

            res.status(200).json({token: 'Bearer '+token})

          }
          else{
            res.status(401).json({message:"Incorrect password"})
          }
          
        }
        else{
          res.status(404).json({message:"There isn't user with login "+req.body.login});
        }


    }

}

module.exports = accountController;