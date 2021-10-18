var HtmlReporter = require('protractor-beautiful-reporter');
var HTMLReport = require('protractor-html-reporter-2');
var jasmineReporters = require('jasmine-reporters');
exports.config = {
    directConnect: true,
    frameork: 'jasmine2',
    specs: ['../test_spec/SignUp_spec.js','../test_spec/SignIn_spec.js','../test_spec/NewArticle_spec.js',
    '../test_spec/Favorite_spec.js','../test_spec/FollowArticle_spec.js'],
    
    onPrepare: function(){
        browser.ignoreSynchronization=true;
        browser.manage().window().maximize();
        //allure report config
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));
        //taking screenshots
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
              allure.createAttachment('Screenshot', function () {
                return new Buffer.from(png, 'base64')
              }, 'image/png')();
              done();
            })
          });

        //beautiful report  
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
         }).getJasmine2Reporter());
         var reporter = new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
         });

         //Protractor HTML reporter-2
         jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './',
            filePrefix: 'xmlresults'
        }));
    },
    // this used to take and store screenshot for html reporter-2
    plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: true,
        disableScreenshot: false,
        screenshotPath:'./reports/screenshots',
        screenshotOnExpectFailure:false,
        screenshotOnSpecFailure:true,
        htmlReportDir:'./reports/htmlReports',
        clearFoldersBeforeTest: false,
        failTestOnErrorLog: {
            failTestOnErrorLogLevel: 900,
            excludeKeywords: {}
        }
      }],
    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
    
        capsPromise.then(function (caps) {
           browserName = caps.get('browserName');
           browserVersion = caps.get('version');
           platform = caps.get('platform');
    
           var HTMLReport = require('protractor-html-reporter-2');
    
           testConfig = {
               reportTitle: 'Protractor Test Execution Report',
               outputPath: './reports/htmlReports',
               outputFilename: 'ProtractorTestReport',
               screenshotPath: './reports/screenshots',
               testBrowser: browserName,
               browserVersion: browserVersion,
               modifiedSuiteName: false,
               screenshotsOnlyOnFailure: true,
               testPlatform: platform
           };
           new HTMLReport().from('xmlresults.xml', testConfig);
       });
    }
}