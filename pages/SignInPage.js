const { browser } = require('protractor');
var objects = require('../json/objects.json');
var base_page= require('./BasePage.js')

var SignInPage = function(){

    //The following are Business logics

    this.signin = function(){
        base_page.clickByXpath(objects.locators.signinPage.signin_xpath);
        base_page.enterByXpath(objects.locators.signupPage.email_xpath, objects.testData.signUpPage.email);
        base_page.enterByXpath(objects.locators.signupPage.password_xpath, objects.testData.signUpPage.password);
        base_page.clickByXpath(objects.locators.signinPage.SigninButton_xpath)
    };
}
module.exports = new SignInPage();