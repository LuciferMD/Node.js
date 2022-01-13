
const follower = require("../Repositories/followerRepository");

module.exports = followerService = {

    addFollower :async function(instance){
        
       if(instance.userId==instance.followersId) {
        throw(new Error("you can't subscribe to yourself"));
       }

        return await follower.addFollower(instance);
    },

    returnAllFollowers : async function(){
        
        return await follower.returnAllFollowers();
    },
    
    
    deleteFollower : async function (id) {
        return await follower.deleteFollower(id);
    },

   
}