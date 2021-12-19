const sequelize =require("../Associations/associations");

module.exports = genreRepository ={

        
        addGenre : async function(instance){
            
            let genre = await sequelize.models.Genre.create(instance);
            
            return genre;
        },
        
        returnAllGenres : async function(){
            
            return await sequelize.models.Genre.findAll();
        },
        
        

    changeGenre : async function(instance) {

        let genre = await sequelize.models.Genre.findOne(
            { where:{
               id: instance.id
            }}          
        );
        
         genre = await genre.update( 
                {
                name: instance.name || this.name,
            
                });

        return genre;
    },

    deleteGenre : async function (id) {
        let genre = await sequelize.models.Genre.findByPk(id);
        if(!genre)
        return false;
        
        genre.destroy();
        return true;
    }
    
    
}