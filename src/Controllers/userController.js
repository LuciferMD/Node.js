const express = require('express');
const userService = require('../Services/userService')

let userController = {

    addUser : async function(req, res, next) {
        console.log("Adding user");
        let user = {
            id: req.body.id,
            login : req.body.login,
            password : req.body.password
        }
        try{
            let newUser = await userService.addUser(user);
            res.status(200).json(newUser);
        }
        catch(error){
            next(error);
        }
    },

    returnAllUsers : async function(req, res, next){
        console.log("Return all users");
        
      try{  
        let users =  await userService.returnAllUsers();
        res.status(200).json(users);
      }
      catch(error){
          next(error);
      }
    },

    getById : async function(req, res, next){
        console.log("Return user");
        
      try{  
        let user =  await userService.getById(req.body.id);
        res.status(200).json(user);
      }
      catch(error){
          next(error);
      }
    },
    
    changeUser : async function(req, res, next){
        console.log("Change user");
        let user = {
            id: req.body.id,
            login : req.body.login,
            password : req.body.password
        }

       // res.json(user);
      try{  
        let result =  await userService.changeUser(user);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },

    deleteUser : async function(req, res, next){
        console.log("Delete user");
    

       // res.json(user);
      try{  
        let result =  await userService.deleteUser(req.body.id);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },
};

module.exports = userController;