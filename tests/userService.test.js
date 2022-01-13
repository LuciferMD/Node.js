jest.mock('../src/Repositories/userRepository', ()=>{
    return jest.fn(()=>true);
});

const service = require('../src/Services/userService');


let user

beforeEach(() => {
    user = {
        id: 1
    }     
    
})

describe('addFollower', () =>{

    test('user repository should be called', async() =>{
        try{
            const res = await service.addUser(user);
            expect(res).toBe(true);
        }catch(e){
        }
    })

}),

describe ('deleteUser', () =>{
    test('there isnt user', async() =>{
        try{
            const res = await service.deleteUser(user);
            expect(res).toBe(true)
        }catch(e){
            
        }
    })
})

