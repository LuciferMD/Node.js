const express = require("assert");
const genre = require("../Repositories/genreRepository");

module.exports = genreService = {

    addGenre :async function(instance){

        return await genre.addGenre(instance);
    },
    returnAllGenres : async function(){
        
        return await genre.returnAllGenres();
    },
     
    changeGenre: async function(instance) {
        return await genre.changeGenre(instance);
    },
    

    deleteGenre : async function (id) {
        return await genre.deleteGenre(id);
    }
}