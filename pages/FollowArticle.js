var objects = require('../json/objects.json');
var base_page= require('./BasePage.js')

var FollowArticle = function(){

    //The following are Business logics

    this.followArticle = function(){
        browser.driver.sleep(5000);
        base_page.clickByXpath(objects.locators.followArticle.followArticle_button_Xpath);
        browser.driver.sleep(2000);
    };
}
module.exports = new FollowArticle();