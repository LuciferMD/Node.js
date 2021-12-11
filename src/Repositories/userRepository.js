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
        
        return await sequelize.models.User;
    }

}