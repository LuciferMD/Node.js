const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt =require('passport-jwt').ExtractJwt;
const keys = require('../config/keys')
const userService = require('../Services/userService')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload,done) => {
            try{

                const user = await userService.getById(payload.userId)
    
                if(user) {
                    done(null,user)
                }
                else{
                    done(null,false)
                }
            }catch (e){
                console.log(e)
            }
        })
    )
}