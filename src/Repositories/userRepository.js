const sequelize =require("../Associations/associations");

module.exports = userRepository ={

    getByLogin : async function(login){
        return await sequelize.models.User.findOne(
            { where: {
                login: login
            }}
        );
    },
    
    addUser : async function(instance){

        let user = await sequelize.models.User.create(instance);
        
        return user;
    },

    returnAllUsers : async function(){
        
        return await sequelize.models.User.findAll();
    },

    getById : async function(id){
        
        return await sequelize.models.User.findOne(
            { where:{
               id: id
            }}          
        );
    },

    changeUser : async function(instance) {

        let user = await sequelize.models.User.findOne(
            { where:{
               id: instance.id
            }}          
        );
        
         user = await user.update( 
                {
                login: instance.login || this.login,
                password: instance.password || this.password    
                });

        return user;
    },

    deleteUser : async function (id) {
        let user = await sequelize.models.User.findByPk(id);
        if(!user)
            return false;
 
        user.destroy();
        return true;
    }

}