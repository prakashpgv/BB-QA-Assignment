var signin_page = require('../pages/SignInPage.js');
var base_page= require('../pages/BasePage.js')
var objects = require('../json/objects.json')

describe("SignIn Test", function(){

    it("SignIn Test", function(){
        base_page.navigateToUrl(objects.testSiteUrl);
        signin_page.signin();
    });
});