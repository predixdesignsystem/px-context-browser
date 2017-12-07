function checkEventually(within, every, testValFn, assertValFn, finishedFn) {
  var started = new Date();
  var task = setInterval(function() {
    var elapsed = new Date() - started;
    if (testValFn() === assertValFn()) {
      // Test succeeded
      clearInterval(task);
      finishedFn(true);
    }
    if (elapsed >= within) {
      // Test failed and no time left to try again
      clearInterval(task);
      finishedFn(false);
    }
  }, every);
};

if (chai && chai.Assertion) {
  chai.Assertion.addMethod('eventuallyEqual', function(assertValue, settings, done) {
    settings = settings || {};
    var within = settings.within || 1000;
    var every = settings.every || 100;

    var getTestValue = function() {
      if (typeof this._obj === 'function') {
        return this._obj();
      }
      return this._obj;
    }.bind(this);

    var getAssertValue = function() {
      return assertValue;
    }.bind(this);

    var finishedFn = function() {
      var testVal = getTestValue();
      var assertVal = getAssertValue();
      var eqStr = 'expected #{exp} to equal #{act} within '+within+'ms';
      var notEqStr = 'expected #{exp} to not equal #{act} within '+within+'ms';
      this.assert(
        testVal === assertVal,
        eqStr,
        notEqStr,
        testVal,
        assertVal
      );
      if (done) {
        done();
      }
    }.bind(this);

    checkEventually(within, every, getTestValue, getAssertValue, finishedFn);
  });
}
