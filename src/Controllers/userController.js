const express = require('express');
const userService = require('../Services/userService')

let userController = {

    addUser : function(req, res) {
        console.log("Adding user");
       
        
        let user = {
            login : req.body.login,
            password : req.body.password
        }
            
         userService.addUser(user)
        .catch( (error) => {
            console.log('unhandled error:\n ' + error);
         })
       

    },

    

};
module.exports = userController;