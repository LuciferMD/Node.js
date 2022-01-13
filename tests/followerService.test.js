//npm i -D @types/jest
// npm test
jest.mock('../src/Repositories/followerRepository', ()=>{
    return jest.fn(()=>true);
});

const service = require('../src/Services/followerService');
const {addFollower} = require('../src/Repositories/followerRepository');


let follower

beforeEach(() => {
    follower = {
        id: 1,
        userId : 2,
        followersId : 2
    }     
    fn = jest.fn(addFollower);
})

describe('addFollower', () =>{

    test('you cant subscribe to yourself', async() =>{     
        try{
            const result = await service.addFollower(follower);

        }catch (e){
            
            expect(e.message).toBe("you can't subscribe to yourself");
        }
    })

    test('follower repository should be called', async() =>{
        try{
            const res = await service.addFollower(follower);

            expect(res).toBe(true);
        }catch(e){
        }
    })

})


