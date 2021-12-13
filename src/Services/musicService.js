const express = require("assert");
const music = require("../Repositories/musicRepository");

module.exports = musicService = {

    addMusic : async function(instance){

        return await music.addMusic(instance);
    },

    changeMusic : async function(instance){
        return await music.changeMusic(instance);
    },

    getById : async function(id){
        return await music.getById(id)
    },

    deleteMusic : async function(id){
        return await music.deleteMusic(id);
    },

    returnAllMusic : async function(){
        return await music.returnAllMusic();
    }

}