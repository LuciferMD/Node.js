const express = require('express');
const musicService = require('../Services/likeService')

let likeController = {

    addLike: async function(req, res, next) { ///??
        let like = {
            id: req.params.id,
            authorId: req.body.authorId,
            musicId: req.body.musicId,
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
        
      try{  
        let like =  await likeService.returnAllLike();
        res.status(200).json(like);
      }
      catch(error){
          next(error);
      }
    },


    deleteLike : async function(req, res, next){

       // res.json(user);
      try{  
        let result =  await likeService.deleteLike(req.params.id);
        res.status(203).json(result);
      }
      catch(error){
          next(error);
      }
    },
};

module.exports = likeController;