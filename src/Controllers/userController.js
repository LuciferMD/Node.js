const express = require('express');
const userService = require('../Services/userService')
const Joi = require('joi');
const  authScema  = require('../Middleware/validation_schema');

let userController = {

    addUser : async function(req, res, next) {
    
    let user = {
      id: req.params.id,
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

      try{  
        let users =  await userService.returnAllUsers();
        res.status(200).json(users);
      }
      catch(error){
          next(error);
      }
    },

    getById : async function(req, res, next){
     
      try{  
        let user =  await userService.getById(req.params.id);
        res.status(200).json(user);
      }
      catch(error){
          next(error);
      }
    },
    
    changeUser : async function(req, res, next){
        let user = {
            id: req.params.id,
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

       // res.json(user);
      try{  
        let result =  await userService.deleteUser(req.params.id);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },
};

module.exports = userController;