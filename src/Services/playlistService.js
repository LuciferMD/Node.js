const express = require("assert");
const playlist = require("../Repositories/playlistRepository");

module.exports = playlistService = {

    addPlaylist : async function(instance){

        // if(await playlist.getById(instance.id))
        //    throw(new Error("playlist already in use"));

        return await playlist.addPlaylist(instance);
    },

    changePlaylist : async function(instance){

        return await playlist.changePlaylist(instance);
    },

    getById : async function(id){
        return await playlist.getById(id)
    },

    deletePlaylist : async function(id){
        return await playlist.deletePlaylist(id);
    },

    returnAllPlaylist : async function(){
        return await playlist.returnAllPlaylist();
    }

}