    var homePage = require('./../pageobjects/angularHomePage.js');
    describe('angularjs homepage', function() {
      it('should greet the named user', function() {
        var angularHomepage = new homePage();
        angularHomepage.get();
		angularHomepage.setName('Abhi');
		browser.sleep(3000);
        expect(angularHomepage.getGreeting()).toEqual('Hello Abhi!');
      });
    });