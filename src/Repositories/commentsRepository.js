const sequelize =require("../Associations/associations");

module.exports = commentRepository ={

    
    
    addComment : async function(instance){

        let music = await sequelize.models.Music.findOne(
            { where:{
               id: instance.musicId
            }}          
        );

        if(!music){
            throw new Error("No music");
        }

       let comment = await music.createComment(instance);

        return comment;
    },
    returnAllComments : async function(){
        
        return await sequelize.models.Comment.findAll();
    },
    
    getById : async function(id){
        
        return await sequelize.models.Comment.findOne(
            { where:{
                id: id
            }}          
            );
        },
        
        changeComment : async function(instance) {
            
        let comment = await sequelize.models.Comment.findOne(
            { where:{
               id: instance.id
            }}          
            );
            
            comment = await comment.update( 
                {
                    name: instance.name || this.name,
                    authorId: instance.authorId || this.authorId,
                    genreId: instance.genreId || this.genreId,
                    file: instance.file || this.file,
                avatar: instance.avatar || this.avatar,
                text: instance.text || this.text
        });

        return comment;
    },
    
    deleteComment : async function (id) {
        let comment = await sequelize.models.Comment.findByPk(id);
        if(!comment)
            return false;
 
        comment.destroy();
        return true;
    }
    

}