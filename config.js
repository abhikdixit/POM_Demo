    exports.config = {
			directConnect: true,
        capabilities: {
            'browserName': 'chrome'
        },
        framework: 'jasmine',
        specs: ['./specs/**/*.js'],
        jasmineNodeOpts: {
            defaultTimeoutInterval: 30000
        },
        onPrepare: function () {
            browser.manage().window().maximize();
            browser.manage().timeouts().implicitlyWait(5000);
        }
    };