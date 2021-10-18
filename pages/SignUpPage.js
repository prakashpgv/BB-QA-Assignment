const { browser } = require('protractor');
var objects = require('../json/objects.json');
var base_page= require('./BasePage.js')

var SignUpPage = function(){

    //The following are Business logics

    this.signup = function(){
        base_page.clickByXpath(objects.locators.signupPage.signup_xpath);
        base_page.enterByXpath(objects.locators.signupPage.userName_xpath, objects.testData.signUpPage.userName);
        base_page.enterByXpath(objects.locators.signupPage.email_xpath, objects.testData.signUpPage.email);
        base_page.enterByXpath(objects.locators.signupPage.password_xpath, objects.testData.signUpPage.password);
        base_page.clickByXpath(objects.locators.signupPage.SignUpButton_xpath)
    };
    this.logout = function(){
        browser.driver.sleep(5000);
        base_page.clickByXpath(objects.locators.logoutPage.settings_Xpath);
        base_page.clickByXpath(objects.locators.logoutPage.logout_Xpath);
    };
}
module.exports = new SignUpPage();