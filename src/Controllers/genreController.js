const express = require('express');
const genreService = require('../Services/genreService')

let genreController = {

    addGenre : async function(req, res, next) {
        console.log("Adding genre");
        let genre = {
            id: req.body.id,
            name : req.body.name,
        }
        try{
            let newGenre = await genreService.addGenre(genre);
            res.status(200).json(newGenre);
        }
        catch(error){
            next(error);
        }
    },
    returnAllGenres : async function(req, res, next){
        console.log("Return all genres");
        
        try{  
            let genres =  await genreService.returnAllGenres();
            res.status(200).json(genres);
        }
        catch(error){
            next(error);
        }
    },
    
    
    changeGenre : async function(req, res, next){
        console.log("Change genre");
        let genre = {
            id: req.body.id,
            name : req.body.name,
        }

       // res.json(user);
      try{  
        let result =  await genreService.changeGenre(genre);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },
    

    deleteGenre: async function(req, res, next){
        console.log("Delete genre");

       // res.json(user);
      try{  
        let result =  await genreService.deleteGenre(req.body.id);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },
    
};
module.exports = genreController;