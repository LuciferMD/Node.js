const express = require('express');
const musicService = require('../Services/likeService')

let likeController = {

    addLike: async function(req, res, next) { ///??
        console.log("Adding like");
        let like = {
            id: req.body.id,
            authorId: req.body.id,
            musicId: req.body.id,
        }
        try{
            let newLike = await likeService.addLike(like);
            res.status(201).json(newLike);
        }
        catch(error){
            next(error);
        }
    },

    returnAllLike : async function(req, res, next){
        console.log("Return all likes");
        
      try{  
        let like =  await likeService.returnAllLike();
        res.status(200).json(like);
      }
      catch(error){
          next(error);
      }
    },


    deleteLike : async function(req, res, next){
        console.log("Delete like");
    

       // res.json(user);
      try{  
        let result =  await likeService.deleteLike(req.body.id);
        res.status(203).json(result);
      }
      catch(error){
          next(error);
      }
    },
};

module.exports = likeController;