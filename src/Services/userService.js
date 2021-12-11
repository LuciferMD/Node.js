const express = require("assert");
const { addUser } = require("../Controllers/userController");
const user = require("../Repositories/userRepository.js");

module.exports = userService = {

    addUser :async function(instance){

        if(await user.getByLogin(instance.login))
           throw(console.log("username already in use"));

        return user.addUser(instance);
    },

    returnAllUsers : async function(){

        return await user.returnAllUsers();
    }
}