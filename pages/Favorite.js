var objects = require('../json/objects.json');
var base_page= require('./BasePage.js')

var Favorite = function(){

    //The following are Business logics

    this.favorite = function(){
        browser.driver.sleep(5000);
        base_page.clickByXpath(objects.locators.favorite.home_Xpath);
        browser.driver.sleep(5000);
        base_page.clickByXpath(objects.locators.favorite.globalFeed_Xpath);
        browser.driver.sleep(2000);
        base_page.clickByXpath(objects.locators.favorite.article_xpath);
        browser.driver.sleep(2000);
        base_page.clickByXpath(objects.locators.favorite.favorite_icon_Xpath);
        browser.driver.sleep(2000);
    };
}
module.exports = new Favorite();