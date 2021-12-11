const sequelize =require("../Associations/associations");

module.exports = userRepository ={

    getByLogin : async function(login){
        // return await sequelize.module.user.fin(
        //     { where: {
        //         login: login
        //     }}
        // );
    },
    
    addUser : async function(instance){
        
        let user = await sequelize.Models.user.create(instance)

        //let user = await sequelize.models.user.create(instance);
        
        return user;
    }

}