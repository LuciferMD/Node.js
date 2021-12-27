const sequelize =require("../Associations/associations");

module.exports = commentRepository ={

    
    
    addComment : async function(instance){

        let user = await sequelize.models.User.findOne(
            { where:{
               id: instance.authorId
            }}          
        );

        if(!user){
            throw new Error("No user");
        }

       let comment = await user.createComment(instance);

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
                authorId: instance.authorId || this.authorId,
                musicId: instance.musicId || this.avatar,
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