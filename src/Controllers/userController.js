const express = require('express');
const { Json } = require('sequelize/dist/lib/utils');
const userService = require('../Services/userService')

let userController = {

    addUser : function(req, res) {
        console.log("Adding user");
        let user = {
            id: req.body.id,
            login : req.body.login,
            password : req.body.password
        }
    
         userService.addUser(user)
        .catch( (error) => {
            console.log('unhandled error:\n ' + error);
         })
       

    },

    returnAllUsers : function(req, res){
        console.log("Return all users");
        
        res.Json( userService.returnAllUsers());
        
    }

};
module.exports = userController;