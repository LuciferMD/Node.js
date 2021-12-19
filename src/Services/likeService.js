const express = require("assert");
const like = require("../Repositories/likeRepository");

module.exports = likeService = {

    addLike : async function(instance){

        return await like.addLike(instance);
    },

    deleteLike : async function(id){
        return await like.deleteLike(id);
    },

    returnAllLike : async function(){
        return await like.returnAllLike();
    }

}