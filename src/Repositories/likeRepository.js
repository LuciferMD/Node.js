const sequelize =require("../Associations/associations");

module.exports = likeRepository ={
 
    addLike : async function(instance){

        let music = await sequelize.models.Music.findOne(
            { where:{
               id: instance.musicId
            }}          
        );

        if(!music){
            throw new Error("No music");
        }

       let like = await music.createLike(instance);

        return like;
    },
    returnAllLike : async function(){
        
        return await sequelize.models.Like.findAll();
    },

    // getById : async function(id){
        
    //     return await sequelize.models.User.findOne(
    //         { where:{
    //            id: id
    //         }}          
    //     );
    // },

    // changeUser : async function(instance) {

    //     let user = await sequelize.models.User.findOne(
    //         { where:{
    //            id: instance.id
    //         }}          
    //     );
        
    //      user = await user.update( 
    //             {
    //             login: instance.login || this.login,
    //             password: instance.password || this.password    
    //             });

    //     return user;
    // },

    deleteLike : async function (id) {
        let like = await sequelize.models.Like.findByPk(id);
        if(!like)
            return false;
 
        like.destroy();
        return true;
    }

}