const express = require("assert");
const user = require("../Repositories/userRepository.js");

module.exports = userService = {

    addUser :async function(instance){

        if(await user.getByLogin(instance.login))
           throw(new Error("username already in use"));

        return await user.addUser(instance);
    },

    returnAllUsers : async function(){

        return await user.returnAllUsers();
    },

    getById : async function(instance){
        return await user.getById(instance);
    },

    changeUser : async function(instance) {
        return await user.changeUser(instance);
    },

    deleteUser : async function (id) {
        return await user.deleteUser(id);
    }
}