jest.mock('../src/Associations/associations');

const sequelize = require("../src/Associations/associations");
const repository = require('../src/Repositories/followerRepository');




describe('addFollower', () =>{
    let response
    let todos

    beforeEach(()=>{

        todos = {
            id: 1,
            userId : 2,
            followersId : 2
        }   
        
        response ={
            data:{todos}
        }
        
    })

    test('should return data from backend', async() =>{     
        try{
            sequelize.create.mockReturnValue(response)

            return repository.addFollower.then(data => {
                expect(data.todos).toEqual(todos)
            })
        } catch(e){
            
        }
    })


})