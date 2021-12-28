const user = require("../Repositories/userRepository.js");

module.exports = accountService = {

    Registration :async function(instance){

        if(await user.getByLogin(instance.login))
           throw(new Error("username already in use"));

        return await user.addUser(instance);
    },
}