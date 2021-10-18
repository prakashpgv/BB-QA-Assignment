var favorite_page = require('../pages/Favorite');
var base_page= require('../pages/BasePage.js')
var objects = require('../json/objects.json')

describe("Favorite Test", function(){

    it("Favorite Test", function(){
        favorite_page.favorite();
    });
});