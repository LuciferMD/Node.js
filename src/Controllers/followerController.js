const express = require('express');
const followerService = require('../Services/followerService')

let followerController = {

    addFollower : async function(req, res, next) {

        let follower = {
            id: req.params.id,
            userId : req.body.userId,
            followersId : req.body.followersId
        }
        try{
            let newFollower = await followerService.addFollower(follower);
            res.status(200).json(newFollower);
        }
        catch(error){
            next(error);
        }
    },
    returnAllFollowers : async function(req, res, next){
       
        
      try{  
        let followers =  await followerService.returnAllFollowers();
        res.status(200).json(followers);
      }
      catch(error){
          next(error);
      }
    },

    
    deleteFollower : async function(req, res, next){
      
    

       // res.json(user);
      try{  
        let result =  await followerService.deleteFollower(req.params.id);
        res.status(200).json(result);
      }
      catch(error){
          next(error);
      }
    },
    
};
module.exports = followerController;