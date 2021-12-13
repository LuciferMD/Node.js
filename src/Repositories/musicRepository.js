const sequelize =require("../Associations/associations");

module.exports = musicRepository ={

    
    
    addMusic : async function(instance){

        let user = await sequelize.models.User.findByPk(instance.authorId);
        if(!user){
            throw new Error("No user");
        }

       let music = await user.createMusic(instance);

        return music;
    },

    returnAllMusic : async function(){
        
        return await sequelize.models.Music.findAll();
    },

    getById : async function(id){
        
        return await sequelize.models.Music.findOne(
            { where:{
               id: id
            }}          
        );
    },

    changeMusic : async function(instance) {

        let music = await sequelize.models.Music.findOne(
            { where:{
               id: instance.id
            }}          
        );
        
        music = await music.update( 
                {
                name: instance.name || this.name,
                authorId: instance.authorId || this.authorId,
                genreId: instance.genreId || this.genreId,
                file: instance.file || this.file,
                avatar: instance.avatar || this.avatar,
                text: instance.text || this.text
        });

        return music;
    },

    deleteMusic : async function (id) {
        let music = await sequelize.models.Music.findByPk(id);
        if(!music)
            return false;
 
        music.destroy();
        return true;
    }

}