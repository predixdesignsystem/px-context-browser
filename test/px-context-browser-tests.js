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
  });
}
