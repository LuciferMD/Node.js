jest.mock('../src/Associations/associations');

const sequelize = require("../src/Associations/associations");
const repository = require('../src/Repositories/musicRepository');


describe('addMusic', () =>{
    let response
    let todos

    beforeEach(()=>{

        todos = {
            id: 1,
            name:"Thundertruck"
        }   
        
        response ={
            data:{todos}
        }
        
    })

    test('should be called to db', async() =>{     
        try{
            return repository.addMusic.then(data => {
                expect(sequelize.create).toBeCalled()
            })
        } catch(e){
            
        }
    }),

    test('should return data from backend', async() =>{     
        try{
            sequelize.create.mockReturnValue(response)

            return repository.addMusic.then(data => {
                expect(data.todos).toEqual(todos)
            })
        } catch(e){
            
        }
    })
    


})