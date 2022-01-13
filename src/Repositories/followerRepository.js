const sequelize =require("../Associations/associations");

module.exports = followerRepository ={

    
    addFollower : async function(instance){
        try{
            let follower = await sequelize.models.Follower.create(instance);     
            return follower;
        }catch(e){
            throw(new Error(e));
        }
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