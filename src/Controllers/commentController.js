const express = require('express');
const userService = require('../Services/commentService')

let commentController = {

    addComment : async function(req, res, next) {
        console.log("Adding comment");
        let comment = {
            id: req.body.id,
            authorId: req.body.id,
            musicId: req.body.id,
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
        console.log("Return all comments");
        
        try{  
            let comments =  await userService.returnAllComments();
            res.status(200).json(comments);
        }
        catch(error){
            next(error);
        }
    },
    
    getById : async function(req, res, next){
        console.log("Return comment");
        
        try{  
            let comment =  await commentService.getById(req.body.id);
            res.status(200).json(comment);
        }
        catch(error){
            next(error);
        }
    },
    
    changeComment: async function(req, res, next){
        console.log("Change comment");
        let comment = {
            id: req.body.id,
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
        console.log("Delete comment");
    
       // res.json(user);
      try{  
        let result =  await commentService.deleteComment(req.body.id);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },
    
};
module.exports = commentController;