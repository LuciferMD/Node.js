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

    // getById : async function(req, res, next){
    //     console.log("Return music");
        
    //   try{  
    //     let music =  await musicService.getById(req.body.id);
    //     res.status(200).json(music);
    //   }
    //   catch(error){
    //       next(error);
    //   }
    // },
    
    // changeMusic : async function(req, res, next){
    //     console.log("Change music");

    //     let music = {
    //         id: req.body.id,
    //         name : req.body.name,
    //         authorId : req.body.authorId,
    //         genreId : req.body.genreId,
    //         file : req.body.file,
    //         avatar : req.body.avatar,
    //         text : req.body.text
    //     }

    //    // res.json(user);
    //   try{  
    //     let result =  await musicService.changeMusic(music);
    //     res.status(200).json(result);
    //   }
    //   catch(error){
    //       next(error);
    //   }
    // },

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