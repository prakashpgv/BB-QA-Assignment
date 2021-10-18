var newArticle_page = require('../pages/NewArticle');
var base_page= require('../pages/BasePage.js')
var objects = require('../json/objects.json')

describe("New Article Test", function(){

    it("New Article Test", function(){
        newArticle_page.newArticle();
    });
});