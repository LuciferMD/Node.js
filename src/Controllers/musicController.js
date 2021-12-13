const express = require('express');
const musicService = require('../Services/musicService')

let musicController = {

    addMusic : async function(req, res, next) {
        console.log("Adding music");
        let music = {
            id: req.body.id,
            name : req.body.name,
            authorId : req.body.authorId,
            genreId: req.body.genreId,
            file: req.body.file,
            avatar: req.body.avatar,
            text: req.body.text
        }
        try{
            let newMusic = await musicService.addMusic(music);
            res.status(201).json(newMusic);
        }
        catch(error){
            next(error);
        }
    },

    returnAllMusic : async function(req, res, next){
        console.log("Return all music");
        
      try{  
        let music =  await musicService.returnAllMusic();
        res.status(200).json(music);
      }
      catch(error){
          next(error);
      }
    },

    getById : async function(req, res, next){
        console.log("Return music");
        
      try{  
        let music =  await musicService.getById(req.body.id);
        res.status(200).json(music);
      }
      catch(error){
          next(error);
      }
    },
    
    changeMusic : async function(req, res, next){
        console.log("Change music");

        let music = {
            id: req.body.id,
            name : req.body.name,
            authorId : req.body.authorId,
            genreId : req.body.genreId,
            file : req.body.file,
            avatar : req.body.avatar,
            text : req.body.text
        }

       // res.json(user);
      try{  
        let result =  await musicService.changeMusic(music);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },

    deleteMusic : async function(req, res, next){
        console.log("Delete music");
    

       // res.json(user);
      try{  
        let result =  await musicService.deleteMusic(req.body.id);
        res.status(203).json(result);
      }
      catch(error){
          next(error);
      }
    },
};

module.exports = musicController;