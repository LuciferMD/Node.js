const express = require('express');
const genreService = require('../Services/genreService')

let genreController = {

    addGenre : async function(req, res, next) {
        let genre = {
            id: req.params.id,
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
        
        try{  
            let genres =  await genreService.returnAllGenres();
            res.status(200).json(genres);
        }
        catch(error){
            next(error);
        }
    },
    
    
    changeGenre : async function(req, res, next){
        let genre = {
            id: req.params.id,
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

       // res.json(user);
      try{  
        let result =  await genreService.deleteGenre(req.params.id);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },
    
};
module.exports = genreController;