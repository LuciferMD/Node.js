const express = require("assert");
const follower = require("../Repositories/followerRepository");

module.exports = followerService = {

    addFollower :async function(instance){

        return await follower.addFollower(instance);
    },
    returnAllFollowers : async function(){
        
        return await follower.returnAllFollowers();
    },
    
    
    deleteFollower : async function (id) {
        return await follower.deleteFollower(id);
    }
}