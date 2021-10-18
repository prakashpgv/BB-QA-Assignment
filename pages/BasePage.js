const { element, by } = require("protractor");

var articlePage;

var BasePage = function(){

    this.navigateToUrl = function(url){

        browser.get(url);
    }
    this.enterById = function(id, value){
        element(by.id(id)).sendKeys(value);
        console.log(id+" is entered successfully");
    }

    this.enterByXpath = function(xpath, value){
        element(by.xpath(xpath)).sendKeys(value);
        console.log(xpath+" is entered successfully");
    }

    this.clickByLinkText = function(linkText){
        element(by.linkText(linkText)).click();
        console.log(linkText+" is clicked successfully");
    }

    this.enterByClassName = function(className, value){
        element(by.className(className)).sendKeys(value);
        console.log(className+" is entered successfully");
    }
    this.clickByXpath = function(xpath){
        element(by.xpath(xpath)).click();
        console.log(xpath+" is clicked successfully");
    }
};
module.exports = new BasePage();