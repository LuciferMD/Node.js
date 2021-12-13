const express = require("assert");
const like = require("../Repositories/likeRepository");

module.exports = likeService = {

    addLike : async function(instance){

        return await like.addLike(instance);
    },

    // changeMusic : async function(instance){
    //     return await music.changeMusic(instance);
    // },

    // getById : async function(id){
    //     return await music.getById(id)
    // },

    deleteLike : async function(id){
        return await like.deleteLike(id);
    },

    returnAllLike : async function(){
        return await like.returnAllLike();
    }

}