var objects = require('../json/objects.json');
var base_page= require('./BasePage.js')

var NewArticle = function(){

    //The following are Business logics

    this.newArticle = function(){
        browser.driver.sleep(5000);
        base_page.clickByXpath(objects.locators.newArticle.newArtcile_Xpath);
        base_page.enterByXpath(objects.locators.newArticle.articleTitle_Xpath, objects.testData.newArticle.articleTitle);
        base_page.enterByXpath(objects.locators.newArticle.articleAbout_Xpath, objects.testData.newArticle.articleAbout);
        base_page.enterByXpath(objects.locators.newArticle.writeYourarticle_Xpath, objects.testData.newArticle.writeYourArticle);
        base_page.enterByXpath(objects.locators.newArticle.tags_Xpath, objects.testData.newArticle.enterTags);
        base_page.clickByXpath(objects.locators.newArticle.publishArticle_Xpath);
    };
}
module.exports = new NewArticle();