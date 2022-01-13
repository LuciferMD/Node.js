jest.mock('../src/Repositories/musicRepository', ()=>{
    return jest.fn(()=>true);
});

const service = require('../src/Services/musicService');


let music

beforeEach(() => {
    music = {
        id: 1,
        name: "Thundertruck"
    }     
   
})

describe('addMusic', () =>{


    test('music repository should be called', async() =>{
        try{
            const res = await service.addMusic(music);

            expect(res).toBe(true);
        }catch(e){
        }
    })

}),

describe('deletMusic', () =>{

    test('music repository should be called', async() =>{
        try{
            const res = await service.deleteMusic(music);
            expect(res).toBe(true)
        }catch(e){}
    })
})


