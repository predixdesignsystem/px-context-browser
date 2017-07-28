document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('px-context-browser', function() {
    it('opens when the trigger is tapped', function(done) {
      var fx = fixture('ContextBrowser');
      var triggerEl = fx.querySelector('px-context-browser-trigger');
      var browserEl = fx.querySelector('px-context-browser');

      browserEl.items = [{ id: 'home', label: 'Home' }];
      browserEl.openTrigger = triggerEl.trigger;

      triggerEl.click();

      setTimeout(function() {
        expect(browserEl.opened).to.equal(true);
        done();
      }, 250);
    });

    it('resets its active item to the parent of the selected item 5s after it is closed', function(done) {
      var fx = fixture('ContextBrowserBindingFixture');
      var boundEl = fx.querySelector('#app');
      var triggerEl = fx.querySelector('px-context-browser-trigger');
      var browserEl = fx.querySelector('px-context-browser');

      boundEl.items = [
        { id: "home", label: "Home" },
        { id: "asset", label: "Assets", children: [
          { id: "a1", label: "Asset 1" },
          { id: "a2", label: "Asset 2" }
        ] }
      ];

      triggerEl.click();

      setTimeout(function() {
        browserEl.selectedRoute = ['asset', 'a1'];
      }, 250);
      setTimeout(function() {
        browserEl.active = null;
        document.body.click();
      }, 500);
      setTimeout(function() {
        triggerEl.click();
      }, 6500);
      setTimeout(function() {
        expect(browserEl.active).to.equal(boundEl.items[1]);
        done();
      }, (6500 + 250));
    });

    it('resets its active item to the parent of the selected item 5s after it is closed when `opened` is data-bound in', function(done) {
      var fx = fixture('ContextBrowserBindingFixture');
      var boundEl = fx.querySelector('#app');
      var triggerEl = fx.querySelector('px-context-browser-trigger');
      var browserEl = fx.querySelector('px-context-browser');

      boundEl.items = [
        { id: "home", label: "Home" },
        { id: "asset", label: "Assets", children: [
          { id: "a1", label: "Asset 1" },
          { id: "a2", label: "Asset 2" }
        ] }
      ];

      boundEl.opened = false;
      triggerEl.click();

      setTimeout(function() {
        browserEl.selectedRoute = ['asset', 'a1'];
      }, 250);
      setTimeout(function() {
        browserEl.active = null;
        document.body.click();
      }, 500);
      setTimeout(function() {
        triggerEl.click();
      }, 6500);
      setTimeout(function() {
        expect(browserEl.active).to.equal(boundEl.items[1]);
        done();
      }, (6500 + 250));
    });


    it('does not reset its active item if it is reopened after less than 5s', function(done) {
      var fx = fixture('ContextBrowserBindingFixture');
      var boundEl = fx.querySelector('#app');
      var triggerEl = fx.querySelector('px-context-browser-trigger');
      var browserEl = fx.querySelector('px-context-browser');

      boundEl.items = [
        { id: "home", label: "Home" },
        { id: "asset", label: "Assets", children: [
          { id: "a1", label: "Asset 1" },
          { id: "a2", label: "Asset 2" }
        ] }
      ];

      triggerEl.click();

      setTimeout(function() {
        browserEl.selectedRoute = ['asset', 'a1'];
      }, 250);
      setTimeout(function() {
        browserEl.active = null;
        document.body.click();
      }, 500);
      setTimeout(function() {
        triggerEl.click();
      }, 2000);
      setTimeout(function() {
        expect(browserEl.active).to.equal(null);
        done();
      }, (2000 + 250));
    });

    it('does not reset its active item if it is reopened after less than 5s when `opened` is data-bound in', function(done) {
      var fx = fixture('ContextBrowserBindingFixture');
      var boundEl = fx.querySelector('#app');
      var triggerEl = fx.querySelector('px-context-browser-trigger');
      var browserEl = fx.querySelector('px-context-browser');

      boundEl.items = [
        { id: "home", label: "Home" },
        { id: "asset", label: "Assets", children: [
          { id: "a1", label: "Asset 1" },
          { id: "a2", label: "Asset 2" }
        ] }
      ];

      boundEl.opened = false;
      triggerEl.click();

      setTimeout(function() {
        browserEl.selectedRoute = ['asset', 'a1'];
      }, 250);
      setTimeout(function() {
        browserEl.active = null;
        document.body.click();
      }, 500);
      setTimeout(function() {
        triggerEl.click();
      }, 2000);
      setTimeout(function() {
        expect(browserEl.active).to.equal(null);
        done();
      }, (2000 + 250));
    });

  });
}
