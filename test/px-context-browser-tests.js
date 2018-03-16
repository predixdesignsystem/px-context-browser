const convertNodeListToArray = (l) => Array.isArray(l) ? l : Array.prototype.slice.call(l || []);

describe('px-context-browser', function() {
  it('opens when the trigger is tapped', function(done) {
    var fx = fixture('ContextBrowser');

    flush(() => {
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
  });

  it('shows the first column when it is first opened', done => {
    const fx = fixture('ContextBrowser');

    flush(() => {
      const triggerEl = fx.querySelector('px-context-browser-trigger');
      const browserEl = fx.querySelector('px-context-browser');

      browserEl.openTrigger = triggerEl;
      browserEl.items = [
        { id: "home", label: "Home" },
        { id: "asset", label: "Assets", children: [
          { id: "a1", label: "Asset 1" },
          { id: "a2", label: "Asset 2" }
        ] }
      ];
      triggerEl.click();

      Polymer.RenderStatus.afterNextRender(browserEl, () => {
        const columnsEl = browserEl.shadowRoot ? browserEl.shadowRoot.querySelector('px-context-browser-columns') : browserEl.querySelector('px-context-browser-columns');
        expect(columnsEl._activeEl).to.be.instanceof(HTMLElement);
        done();
      });
    });
  });

  it('resets its active item to the parent of the selected item 5s after it is closed', function(done) {
    var fx = fixture('ContextBrowserBindingFixture');

    flush(() => {
      var triggerEl = fx.querySelector('px-context-browser-trigger');
      var browserEl = fx.querySelector('px-context-browser');

      browserEl.openTrigger = triggerEl;
      browserEl.items = [
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
        expect(browserEl.active).to.equal(browserEl.items[1]);
        done();
      }, (6500 + 250));
    });
  });

  it('resets its active item to the parent of the selected item 5s after it is closed when `opened` is data-bound in', function(done) {
    var fx = fixture('ContextBrowserBindingFixture');

    flush(() => {
      var triggerEl = fx.querySelector('px-context-browser-trigger');
      var browserEl = fx.querySelector('px-context-browser');

      browserEl.openTrigger = triggerEl;
      browserEl.items = [
        { id: "home", label: "Home" },
        { id: "asset", label: "Assets", children: [
          { id: "a1", label: "Asset 1" },
          { id: "a2", label: "Asset 2" }
        ] }
      ];

      browserEl.opened = false;
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
        expect(browserEl.active).to.equal(browserEl.items[1]);
        done();
      }, (6500 + 250));
    });
  });

  // it('does not reset its active item if it is reopened after less than 5s', function(done) {
  //   var fx = fixture('ContextBrowserBindingFixture');
  //   var boundEl = fx.querySelector('#app');
  //   var triggerEl = fx.querySelector('px-context-browser-trigger');
  //   var browserEl = fx.querySelector('px-context-browser');
  //
  //   boundEl.items = [
  //     { id: "home", label: "Home" },
  //     { id: "asset", label: "Assets", children: [
  //       { id: "a1", label: "Asset 1" },
  //       { id: "a2", label: "Asset 2" }
  //     ] }
  //   ];
  //
  //   triggerEl.click();
  //
  //   setTimeout(function() {
  //     browserEl.selectedRoute = ['asset', 'a1'];
  //   }, 250);
  //   setTimeout(function() {
  //     browserEl.active = null;
  //     document.body.click();
  //   }, 500);
  //   setTimeout(function() {
  //     triggerEl.click();
  //   }, 1000);
  //   setTimeout(function() {
  //     expect(browserEl.active).to.equal(null);
  //     done();
  //   }, (1000 + 250));
  // });
  //
  // it('does not reset its active item if it is reopened after less than 5s when `opened` is data-bound in', function(done) {
  //   var fx = fixture('ContextBrowserBindingFixture');
  //   var boundEl = fx.querySelector('#app');
  //   var triggerEl = fx.querySelector('px-context-browser-trigger');
  //   var browserEl = fx.querySelector('px-context-browser');
  //
  //   boundEl.items = [
  //     { id: "home", label: "Home" },
  //     { id: "asset", label: "Assets", children: [
  //       { id: "a1", label: "Asset 1" },
  //       { id: "a2", label: "Asset 2" }
  //     ] }
  //   ];
  //
  //   boundEl.opened = false;
  //   triggerEl.click();
  //
  //   setTimeout(function() {
  //     browserEl.selectedRoute = ['asset', 'a1'];
  //   }, 250);
  //   setTimeout(function() {
  //     browserEl.active = null;
  //     document.body.click();
  //   }, 500);
  //   setTimeout(function() {
  //     triggerEl.click();
  //   }, 2000);
  //   setTimeout(function() {
  //     expect(browserEl.active).to.equal(null);
  //     done();
  //   }, (2000 + 250));
  // });

});

describe('px-context-browser [favorited behaviors]', () => {
  let fx;
  let items;
  let openTrigger;
  let favoritedTrigger;
  let browser;

  beforeEach(done => {
    fx = fixture('ContextBrowserFavoritedFixture');
    flush(() => {
      browser = fx.querySelector('px-context-browser');
      openTrigger = fx.querySelector('#openTrigger');
      favoritedTrigger = fx.querySelector('#favoritedTrigger');
      browser.openTrigger = openTrigger;
      browser.favoritedTrigger = favoritedTrigger;
      items = [
        { id: "home", label: "Home" },
        { id: "asset", label: "Assets", children: [
          { id: "a1", label: "Asset 1" },
          { id: "a2", label: "The Second Asset", children: [
            { id: "abc", label: "ABC" },
            { id: "long", label: "My Very Long Child Asset", children: [
              { id: "fave", label: "My Favorite Asset" }
            ]}
          ]}
        ]}
      ];
      browser.items = items;
      done();
    });
  });

  it('opens the favorited panel when the favorited trigger is tapped', (done) => {
    favoritedTrigger.click();
    flush(() => {
      expect(browser.favoritedOpened).to.be.true;
      done();
    });
  });

  it('opens the favorited panel to an empty view if there are no currently favorited items', (done) => {
    favoritedTrigger.click();
    flushAndRender(() => {
      const emptyText = Polymer.dom(browser.root).querySelector('.context-browser-favorites--empty__text');
      const emptyTextRect = emptyText.getBoundingClientRect();
      expect(emptyTextRect.left > 0).to.be.true;
      expect(emptyTextRect.height).to.be.closeTo(19, 5);
      done();
    }, 10);
  });

  it('opens the favorited panel to a list view if there are favorited items', (done) => {
    browser.favorited = [items[0], items[1]];
    favoritedTrigger.click();
    flush(() => {
      const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
      const favoritedItem = convertNodeListToArray(itemEls).filter(item => item.styleAsFavorite && item.label === 'Home')[0];
      favoritedItemRect = favoritedItem.getBoundingClientRect();
      expect(favoritedItemRect.left > 0).to.be.true;
      expect(favoritedItemRect.height).to.be.closeTo(60, 5);
      done();
    });
  });

  it('immediately adds an item to `favorited` when the user taps the favorite icon in the regular browser', (done) => {
    openTrigger.click();
    flush(() => {
      expect(browser.favorited.length === 0).to.be.true;
      const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
      const homeItem = convertNodeListToArray(itemEls).filter(item => !item.styleAsFavorite && item.label === 'Home')[0];
      const favIcon = Polymer.dom(homeItem.root).querySelector('px-context-browser-action-favorite');
      MockInteractions.tap(favIcon);
      flush(() => {
        expect(browser.favorited.indexOf(items[0]) > -1).to.be.true;
        done();
      });
    });
  });

  it('immediately removes a currently favorited item from `favorited` when the user taps the favorite icon in the regular browser', (done) => {
    browser.favorited = [items[0], items[1]];
    openTrigger.click();
    flush(() => {
      const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
      const homeItem = convertNodeListToArray(itemEls).filter(item => !item.styleAsFavorite && item.label === 'Home')[0];
      const favIcon = Polymer.dom(homeItem.root).querySelector('px-context-browser-action-favorite');
      // Must use the MockInteractions tap event here to ensure test triggers listeners
      // in Polymer 2.x with shadow DOM
      MockInteractions.tap(favIcon);
      expect(browser.favorited.indexOf(items[0]) === -1).to.be.true;
      done();
    });
  });

  it('marks an item as defavorited but keeps it in the favorites list when the user taps the favorite icon in the favorites browser', (done) => {
    browser.favorited = [items[0],items[1]];
    favoritedTrigger.click();
    flush(() => {
      const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
      const homeItem = convertNodeListToArray(itemEls).filter(item => item.styleAsFavorite && item.label === 'Home')[0];
      const favIcon = Polymer.dom(homeItem.root).querySelector('px-context-browser-action-favorite');
      MockInteractions.tap(favIcon);
      flush(() => {
        expect(browser.favorited.indexOf(items[0]) > -1).to.be.true;
        expect(favIcon.hasAttribute('active')).to.be.false;
        done();
      });
    });
  });

  it('updates favorited when the favorites browser is closed for > 5 seconds and the state is dirty', (done) => {
    browser.favorited = [items[0], items[1]];
    favoritedTrigger.click();
    flush(() => {
      const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
      const homeItem = convertNodeListToArray(itemEls).filter(item => item.styleAsFavorite && item.label === 'Home')[0];
      const favIcon = Polymer.dom(homeItem.root).querySelector('px-context-browser-action-favorite');
      MockInteractions.tap(favIcon);
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
      const homeItem = convertNodeListToArray(itemEls).filter(item => item.styleAsFavorite && item.label === 'Home')[0];
      const favIcon = Polymer.dom(homeItem.root).querySelector('px-context-browser-action-favorite');
      MockInteractions.tap(favIcon);
      openTrigger.click();
      // wait at least 5 seconds
      expect(() => browser.favorited.indexOf(items[0]) === -1)
        .to.eventuallyEqual(true, {within: 9000, every: 250}, done);
    });
  });

  it('shows breadcrumbs for non-root items in the Favorites Panel', (done) => {
    browser.favorited = [items[1].children[1].children[0]];
    favoritedTrigger.click();
    flushAndRender(() => {
      const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
      const favoriteItem = convertNodeListToArray(itemEls).filter(item => item.styleAsFavorite && item.label === 'ABC')[0];
      const itemBreadcrumbs = Polymer.dom(favoriteItem.root).querySelector('#breadcrumbs');
      expect(itemBreadcrumbs.innerText.trim()).to.equal("Assets > The Second Asset");
      done();
    }, 10);
  });

  it('truncates breadcrumbs text from the front if too long', (done) => {
    browser.favorited = [items[1].children[1].children[1].children[0]];
    favoritedTrigger.click();
    flushAndRender(() => {
      const itemEls = Polymer.dom(browser.root).querySelectorAll('px-context-browser-item');
      const favoriteItem = convertNodeListToArray(itemEls).filter(item => item.styleAsFavorite && item.label === 'My Favorite Asset')[0];
      const itemBreadcrumbs = Polymer.dom(favoriteItem.root).querySelector('#breadcrumbs');
      expect(itemBreadcrumbs.innerText.trim()).to.equal("... > The Second Asset > My Very Long Child Asset");
      done();
    }, 10);
  });

  it('breadcrumbs truncation algorithm works as expected', (done) => {
    const items = ['US', 'CA', 'Oakland'];
    const oneItem = ['Oakland'];
    const fontStyles = {size: "15px", family: "\"GE Inspira Sans\", sans-serif"};
    favoritedTrigger.click();
    flush(() => {
      const itemEl = Polymer.dom(browser.root).querySelector('px-context-browser-item');
      expect(itemEl._truncateBreadcrumbs(items, fontStyles, 120)).to.equal('US > CA > Oakland'); // width = 117
      expect(itemEl._truncateBreadcrumbs(items, fontStyles, 110)).to.equal('... > CA > Oakland'); // width = 108
      expect(itemEl._truncateBreadcrumbs(items, fontStyles, 100)).to.equal('... > Oakland'); // width = 76
      expect(itemEl._truncateBreadcrumbs(items, fontStyles, 70)).to.equal('... > Oakland'); // end truncation will happen through CSS
      expect(itemEl._truncateBreadcrumbs(oneItem, fontStyles, 60)).to.equal('Oakland'); // width = 52
      expect(itemEl._truncateBreadcrumbs(oneItem, fontStyles, 50)).to.equal('Oakland'); // end truncation will happen through CSS
      done();
    });
  });

  it('shows a contextual notification in the favorites panel but not the regular context browser if `favoritedSyncFailed` is true', (done) => {
    browser.favoritedSyncFailed = true;
    favoritedTrigger.click();
    setTimeout(() => {
      const contextualNotification = Polymer.dom(browser.root).querySelector('px-context-browser-contextual-notification');
      let contextualNotificationRect = contextualNotification.getBoundingClientRect();
      expect(contextualNotificationRect.left > 0).to.be.true;
      expect(contextualNotificationRect.height).to.be.closeTo(80, 5);
      openTrigger.click();

      flushAndRender(() => {
        contextualNotificationRect = contextualNotification.getBoundingClientRect();
        expect(contextualNotificationRect.left).to.equal(0);
        expect(contextualNotificationRect.height).to.equal(0);
        done();
      }, 10);
    }, 1000);
  });

  it('fires the `px-app-asset-favorited-sync-requested` event when the contextual notification resync button is tapped', (done) => {
    var eventSpy = sinon.spy();
    browser.addEventListener('px-app-asset-favorited-sync-requested', eventSpy);

    browser.favoritedSyncFailed = true;
    favoritedTrigger.click();
    setTimeout(() => {
      const contextualNotification = Polymer.dom(browser.root).querySelector('px-context-browser-contextual-notification');
      const notification = Polymer.dom(contextualNotification.root).querySelector('px-notification');
      const resyncIcon = Polymer.dom(notification.root).querySelector('.notification-right px-icon');
      console.log(resyncIcon);

      MockInteractions.tap(resyncIcon);
      // resyncIcon.click();
      expect(eventSpy).to.have.been.calledOnce;
      done();
    }, 600);
  });

  it('updates the panel height to show the correct number of items in the Favorites Panel when new items are favorited', (done) => {
    browser.favorited = [items[0], items[1]];
    favoritedTrigger.click();

    setTimeout(() => {
      const panel = Polymer.dom(browser.root).querySelector('#favoritedPanel');
      let panelRect = panel.getBoundingClientRect();
      expect(panelRect.left).to.be.greaterThan(0);
      expect(panelRect.height).to.be.closeTo(140, 5);

      browser.favorite(items[1].children[0]);
      setTimeout(() => {
        let panelRect = panel.getBoundingClientRect();
        expect(panelRect.left).to.be.greaterThan(0);
        expect(panelRect.height).to.be.closeTo(200, 5);
        done();
      }, 2000);
    }, 2000);
  });

  it('updates the panel height to show the correct number of items in the Favorites Panel when items are filtered', (done) => {
    browser.favorited = [items[0], items[1], items[1].children[0]];
    browser.showFilter = true;
    favoritedTrigger.click();

    setTimeout(() => {
      const panel = Polymer.dom(browser.root).querySelector('#favoritedPanel');
      let panelRect = panel.getBoundingClientRect();
      expect(panelRect.left).to.be.greaterThan(0);
      expect(panelRect.height).to.be.closeTo(252, 5);

      browser.favoritedFilter = "h";
      setTimeout(() => {
        let panelRect = panel.getBoundingClientRect();
        expect(panelRect.left).to.be.greaterThan(0);
        expect(panelRect.height).to.be.closeTo(132, 5);
        done();
      }, 2000);
    }, 2000);
  });

});
