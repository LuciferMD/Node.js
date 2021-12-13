const sequelize =require("../Associations/associations");

module.exports = userRepository ={

    getById : async function(id){
        
        return await sequelize.models.Playlist.findOne(
            { where:{
               id: id
            }}          
        );
    },

    addPlaylist : async function(instance){

        let user = await sequelize.models.User.findByPk(instance.authorId);
        if(!user){
            throw new Error("No user");
        }

       let playlist = await user.createPlaylist(instance);
    
        
        return playlist;
    },

    changePlaylist : async function(instance){
        let playlist = await sequelize.models.Playlist.findOne(
            { where:{
               id: instance.id
            }}          
        );
        
        playlist = await playlist.update( 
                {
                name: instance.name || this.name,
                avatar: instance.avatar || this.avatar,
                text: instance.text || this.text    
                });

        return playlist;
    },

    deletePlaylist : async function (id) {
        let playlist = await sequelize.models.Playlist.findByPk(id);
        if(!playlist)
            return false;
        playlist.destroy();
        return true;
    },

    returnAllPlaylist : async function(){
        
        return await sequelize.models.Playlist.findAll();
    },

}