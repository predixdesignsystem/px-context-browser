/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
