const playlistService = require('../Services/playlistService')

let playlistController = {

    addPlaylist : async function(req, res, next) {
        let playlist = {
            id: req.params.id,
            authorId: req.body.authorId,
            name : req.body.name,
            avatar: req.body.avatar,
            text : req.body.text,
        }
        try{
            let newPlaylist = await playlistService.addPlaylist(playlist);
            res.status(201).json(newPlaylist);
        }
        catch(error){
            next(error);
        }
    },

    changePlaylist : async function(req, res, next) {

        let playlist = {
            id: req.params.id,
            name : req.body.name,
            avatar: req.body.avatar,
            text : req.body.text,
        }
        try{
            let newPlaylist = await playlistService.changePlaylist(playlist);
            res.status(200).json(newPlaylist);
        }
        catch(error){
            next(error);
        }
    },

    getById : async function(req, res, next) {

        try{
            let newPlaylist = await playlistService.getById(req.params.id);
            res.status(200).json(newPlaylist);
        }
        catch(error){
            next(error);
        }
    },
    
    deletePlaylist : async function(req, res, next){  

       // res.json(user);
      try{  
        let result =  await playlistService.deletePlaylist(req.params.id);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },

    

    returnAllPlaylist : async function(req, res, next) {
       
        try{
            let playlists = await playlistService.returnAllPlaylist();
            res.status(200).json(playlists);
        }
        catch(error){
            next(error);
        }
    },
};

module.exports = playlistController;