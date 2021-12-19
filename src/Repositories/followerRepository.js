const sequelize =require("../Associations/associations");

module.exports = followerRepository ={

    
    addFollower : async function(instance){

        let follower = await sequelize.models.Follower.create(instance);
        
        return follower;
    },
    returnAllFollowers : async function(){
        
        return await sequelize.models.Follower.findAll();
    },


    deleteFollower : async function (id) {
        let follower = await sequelize.models.Follower.findByPk(id);
        if(!follower)
            return false;
 
        follower.destroy();
        return true;
    }

}