var signup_page = require('../pages/SignUpPage.js');
var base_page= require('../pages/BasePage.js')
var objects = require('../json/objects.json')

describe("SignUp Test", function(){

    it("SignUp Test", function(){
        base_page.navigateToUrl(objects.testSiteUrl);
        signup_page.signup();
        signup_page.logout();
    });
});