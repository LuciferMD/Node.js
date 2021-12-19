const express = require("assert");
const comment = require("../Repositories/commentsRepository");

module.exports = commentService = {

    addComment :async function(instance){

        return await comment.addComment(instance);

    },
    returnAllComments : async function(){
        
        return await comment.returnAllComments();
    },
    
    getById : async function(instance){
        return await comment.getById(instance);
    },
    
    changeComment : async function(instance) {
        return await comment.changeComment(instance);
    },
    
    
    deleteComment: async function (id) {
        return await comment.deleteComment(id);
    }
}