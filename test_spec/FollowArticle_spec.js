var followArticle_page = require('../pages/FollowArticle');
var base_page= require('../pages/BasePage.js')
var objects = require('../json/objects.json')

describe("Follow Article Test", function(){

    it("Follow Article Test", function(){
        followArticle_page.followArticle();
    });
});