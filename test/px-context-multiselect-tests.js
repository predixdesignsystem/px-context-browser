// This is the wrapper for custom tests, called upon web components ready state

document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});
function runCustomTests() {
  var selectContextMS = Polymer.dom(document).querySelector('#px_context_browser_multiselect');
  var selectContextSA = Polymer.dom(document).querySelector('#px_context_browser_selectall');
  var selectContextNoSA = Polymer.dom(document).querySelector('#px_context_browser_noselectall');
  var selectContextLimit = Polymer.dom(document).querySelector('#px_context_browser_limit');

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases

  suite('Custom Automation Tests for px-context-browser with multiSelect functionality', function() {

    test('Check if checkbox exist for multiselect', function (done) {
      var multiSelect1 = Polymer.dom(document).querySelector('#multiSelect');
      multiSelect1.addEventListener('click', function expandListener() {
        flush(function () {
          var checkBox = Polymer.dom(selectContextMS.root).querySelector('input');
          assert.isNotNull(checkBox);
        });
      });
      done();
      multiSelect1.dispatchEvent(new Event('click'));
    });

    test('Check if the selectAll checkbox exist for multiselect', function (done) {
      var multiSelect2 = Polymer.dom(document).querySelector('#multiSelect');
      multiSelect2.addEventListener('click', function expandListener() {
        flush(function () {
          var checkBox = Polymer.dom(selectContextSA.root).querySelector('[id^="level"] :not(:hidden)');
          assert.isNotNull(checkBox);

        });
      });
      done();
      multiSelect2.dispatchEvent(new Event('click'));
    });

    test('Check if message for limit shows', function (done) {
      var limitMsg = Polymer.dom(document).querySelector('#multiSelect');
        flush(function () {
          var limitMessage = Polymer.dom(selectContextLimit.root).querySelector('#limit');
          var message = limitMessage.innerHTML;
          assert.isNotNull(message);
        });
        done();
      });

    test('Check if the selectAll checkbox is not exist', function (done) {
      var multiSelect2 = Polymer.dom(document).querySelector('#multiSelect');
      multiSelect2.addEventListener('click', function expandListener() {
        flush(function () {
          var checkBox = Polymer.dom(selectContextNoSA.root).querySelector('[id^="level"] :hidden');
          assert.isNotNull(checkBox);

        });
      });
      done();
      multiSelect2.dispatchEvent(new Event('click'));
    });


  });

}
