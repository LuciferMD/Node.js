const sequelize =require("../Associations/associations");

module.exports = likeRepository ={
 
    addLike : async function(instance){

        let user = await sequelize.models.User.findOne(
            { where:{
               id: instance.authorId
            }}          
        );

        if(!user){
            throw new Error("No music");
        }

       let like = await user.createLike({id: instance.id, musicId : instance.musicId});

        return like;
    },
    returnAllLike : async function(){
        
        return await sequelize.models.Like.findAll();
    },


    deleteLike : async function (id) {
        let like = await sequelize.models.Like.findByPk(id);
        if(!like)
            return false;
 
        like.destroy();
        return true;
    }

}