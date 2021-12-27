const express = require('express');
const userService = require('../Services/commentService')

let commentController = {

    addComment : async function(req, res, next) {
        let comment = {
            id: req.params.id,
            authorId: req.body.authorId,
            musicId: req.body.musicId,
            text: req.body.text
        }
        try{
            let newComment = await commentService.addComment(comment);
            res.status(201).json(newComment);
        }
        catch(error){
            next(error);
        }
    },
    returnAllComments : async function(req, res, next){

        
        try{  
            let comments =  await userService.returnAllComments();
            res.status(200).json(comments);
        }
        catch(error){
            next(error);
        }
    },
    
    getById : async function(req, res, next){
        
        try{  
            let comment =  await commentService.getById(req.params.id);
            res.status(200).json(comment);
        }
        catch(error){
            next(error);
        }
    },
    
    changeComment: async function(req, res, next){
       
        let comment = {
            id: req.params.id,
            authorId: req.body.id,
            musicId: req.body.id,
            text: req.body.text
        }
        
        // res.json(user);
      try{  
        let result =  await commentService.changeComment(comment);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },

    
    deleteComment : async function(req, res, next){
    
       // res.json(user);
      try{  
        let result =  await commentService.deleteComment(req.params.id);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },
    
};
module.exports = commentController;