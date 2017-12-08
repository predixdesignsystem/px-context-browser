document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {
  //
  // describe('px-context-browser', function() {
  //   it('opens when the trigger is tapped', function(done) {
  //     var fx = fixture('ContextBrowser');
  //     var triggerEl = fx.querySelector('px-context-browser-trigger');
  //     var browserEl = fx.querySelector('px-context-browser');
  //
  //     browserEl.items = [{ id: 'home', label: 'Home' }];
  //     browserEl.openTrigger = triggerEl.trigger;
  //
  //     triggerEl.click();
  //
  //     setTimeout(function() {
  //       expect(browserEl.opened).to.equal(true);
  //       done();
  //     }, 250);
  //   });
  //
  //   it('resets its active item to the parent of the selected item 5s after it is closed', function(done) {
  //     var fx = fixture('ContextBrowserBindingFixture');
  //     var boundEl = fx.querySelector('#app');
  //     var triggerEl = fx.querySelector('px-context-browser-trigger');
  //     var browserEl = fx.querySelector('px-context-browser');
  //
  //     boundEl.items = [
  //       { id: "home", label: "Home" },
  //       { id: "asset", label: "Assets", children: [
  //         { id: "a1", label: "Asset 1" },
  //         { id: "a2", label: "Asset 2" }
  //       ] }
  //     ];
  //
  //     triggerEl.click();
  //
  //     setTimeout(function() {
  //       browserEl.selectedRoute = ['asset', 'a1'];
  //     }, 250);
  //     setTimeout(function() {
  //       browserEl.active = null;
  //       document.body.click();
  //     }, 500);
  //     setTimeout(function() {
  //       triggerEl.click();
  //     }, 6500);
  //     setTimeout(function() {
  //       expect(browserEl.active).to.equal(boundEl.items[1]);
  //       done();
  //     }, (6500 + 250));
  //   });
  //
  //   it('resets its active item to the parent of the selected item 5s after it is closed when `opened` is data-bound in', function(done) {
  //     var fx = fixture('ContextBrowserBindingFixture');
  //     var boundEl = fx.querySelector('#app');
  //     var triggerEl = fx.querySelector('px-context-browser-trigger');
  //     var browserEl = fx.querySelector('px-context-browser');
  //
  //     boundEl.items = [
  //       { id: "home", label: "Home" },
  //       { id: "asset", label: "Assets", children: [
  //         { id: "a1", label: "Asset 1" },
  //         { id: "a2", label: "Asset 2" }
  //       ] }
  //     ];
  //
  //     boundEl.opened = false;
  //     triggerEl.click();
  //
  //     setTimeout(function() {
  //       browserEl.selectedRoute = ['asset', 'a1'];
  //     }, 250);
  //     setTimeout(function() {
  //       browserEl.active = null;
  //       document.body.click();
  //     }, 500);
  //     setTimeout(function() {
  //       triggerEl.click();
  //     }, 6500);
  //     setTimeout(function() {
  //       expect(browserEl.active).to.equal(boundEl.items[1]);
  //       done();
  //     }, (6500 + 250));
  //   });
  //
  //   // it('does not reset its active item if it is reopened after less than 5s', function(done) {
  //   //   var fx = fixture('ContextBrowserBindingFixture');
  //   //   var boundEl = fx.querySelector('#app');
  //   //   var triggerEl = fx.querySelector('px-context-browser-trigger');
  //   //   var browserEl = fx.querySelector('px-context-browser');
  //   //
  //   //   boundEl.items = [
  //   //     { id: "home", label: "Home" },
  //   //     { id: "asset", label: "Assets", children: [
  //   //       { id: "a1", label: "Asset 1" },
  //   //       { id: "a2", label: "Asset 2" }
  //   //     ] }
  //   //   ];
  //   //
  //   //   triggerEl.click();
  //   //
  //   //   setTimeout(function() {
  //   //     browserEl.selectedRoute = ['asset', 'a1'];
  //   //   }, 250);
  //   //   setTimeout(function() {
  //   //     browserEl.active = null;
  //   //     document.body.click();
  //   //   }, 500);
  //   //   setTimeout(function() {
  //   //     triggerEl.click();
  //   //   }, 1000);
  //   //   setTimeout(function() {
  //   //     expect(browserEl.active).to.equal(null);
  //   //     done();
  //   //   }, (1000 + 250));
  //   // });
  //   //
  //   // it('does not reset its active item if it is reopened after less than 5s when `opened` is data-bound in', function(done) {
  //   //   var fx = fixture('ContextBrowserBindingFixture');
  //   //   var boundEl = fx.querySelector('#app');
  //   //   var triggerEl = fx.querySelector('px-context-browser-trigger');
  //   //   var browserEl = fx.querySelector('px-context-browser');
  //   //
  //   //   boundEl.items = [
  //   //     { id: "home", label: "Home" },
  //   //     { id: "asset", label: "Assets", children: [
  //   //       { id: "a1", label: "Asset 1" },
  //   //       { id: "a2", label: "Asset 2" }
  //   //     ] }
  //   //   ];
  //   //
  //   //   boundEl.opened = false;
  //   //   triggerEl.click();
  //   //
  //   //   setTimeout(function() {
  //   //     browserEl.selectedRoute = ['asset', 'a1'];
  //   //   }, 250);
  //   //   setTimeout(function() {
  //   //     browserEl.active = null;
  //   //     document.body.click();
  //   //   }, 500);
  //   //   setTimeout(function() {
  //   //     triggerEl.click();
  //   //   }, 2000);
  //   //   setTimeout(function() {
  //   //     expect(browserEl.active).to.equal(null);
  //   //     done();
  //   //   }, (2000 + 250));
  //   // });
  //
  // });

  describe('px-context-browser [favorited behaviors]', () => {
    let fx;
    let items;
    let openTrigger;
    let favoritedTrigger;
    let browser;

    beforeEach(done => {
      fx = fixture('ContextBrowserFavoritedFixture');
      flush(() => {
        openTrigger = fx.querySelector('#open-trigger');
        favoritedTrigger = fx.querySelector('#favorited-trigger');
        browser = fx.querySelector('px-context-browser');
        items = [
          { id: "home", label: "Home" },
          { id: "asset", label: "Assets", children: [
            { id: "a1", label: "Asset 1" },
            { id: "a2", label: "Asset 2" }
          ] }
        ];
        browser.items = items;
        done();
      });
    });

    it('opens the favorited panel when the favorited trigger is tapped', (done) => {
      favoritedTrigger.click();
      expect(() => browser.opened && browser.openedFromFavorited)
        .to.eventuallyEqual(true, {within: 1000, every: 100}, done);
    });

    it('immediately adds an item to `favorited` when the user taps the favorite icon in the regular browser', (done) => {
      openTrigger.click();
      flush(() => {
        expect(browser.favorited.length === 0).to.be.true;
        const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
        const homeItem = itemEls.filter(item => !item.styleAsFavorite && item.label === 'Home')[0];
        const favIcon = Polymer.dom(homeItem.root).querySelector('px-context-browser-action-favorite');
        favIcon.click();
        expect(browser.favorited.indexOf(items[0]) > -1).to.be.true;
        done();
      });
    });

    it('marks an item as defavorited but keeps it in the favorites list when the user taps the favorite icon in the favorites browser', (done) => {
      browser.favorited = [items[0]];
      favoritedTrigger.click();
      flush(() => {
        const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
        const homeItem = itemEls.filter(item => item.styleAsFavorite && item.label === 'Home')[0];
        const favIcon = Polymer.dom(homeItem.root).querySelector('px-context-browser-action-favorite');
        favIcon.click();
        expect(browser.favorited.indexOf(items[0]) > -1).to.be.true;
        expect(favIcon.hasAttribute('active')).to.be.false;
        done();
      });
    });

    it('updates favorited when the favorites browser is closed for > 5 seconds and the state is dirty', (done) => {
      browser.favorited = [items[0], items[1]];
      favoritedTrigger.click();
      flush(() => {
        const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
        const homeItem = itemEls.filter(item => item.styleAsFavorite && item.label === 'Home')[0];
        const favIcon = Polymer.dom(homeItem.root).querySelector('px-context-browser-action-favorite');
        favIcon.click();
        favoritedTrigger.click();
        // wait at least 5 seconds
        expect(() => browser.favorited.indexOf(items[0]) === -1)
          .to.eventuallyEqual(true, {within: 9000, every: 250}, done);
      });
    });

    it('updates favorited when the user opens the regular browser and the state is dirty', (done) => {
      browser.favorited = [items[0], items[1]];
      favoritedTrigger.click();
      flush(() => {
        const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
        const homeItem = itemEls.filter(item => item.styleAsFavorite && item.label === 'Home')[0];
        const favIcon = Polymer.dom(homeItem.root).querySelector('px-context-browser-action-favorite');
        favIcon.click();
        openTrigger.click();
        // wait at least 5 seconds
        expect(() => browser.favorited.indexOf(items[0]) === -1)
          .to.eventuallyEqual(true, {within: 9000, every: 250}, done);
      });
    });

  });
}
