// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  var selectContext = Polymer.dom(document).querySelector('#px_context_browser_1');
  var contextExpanded = false;
  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases

  suite('Custom Automation Tests for px-context-browser', function() {
    var topmostSelectLabel = selectContext.querySelector('h1 span').innerHTML;
    test('Check that the topmost asset name mirrors the selected asset', function(done) {
      flush(function(){
        var breadcrumbEndLabels = selectContext.querySelectorAll('li');
        assert.isTrue(topmostSelectLabel === breadcrumbEndLabels[3].innerHTML);
        done();
      });
    });

    test('Check that clicking on the header expands the context path area', function(done) {
      var clickableHeader = selectContext.querySelector('h1');
      clickableHeader.addEventListener('click', function expandListener() {
        setTimeout(function(){
          var columnsContainer = selectContext.querySelector('#columnBrowser');
          assert.isTrue(window.getComputedStyle(columnsContainer).width === '900px');
          done();
          clickableHeader.removeEventListener('click', expandListener);
        }, 50);
      });
      clickableHeader.dispatchEvent(new Event('click'));
    });

    test('Check if selected item has correct visual highlights', function(done) {
      var itemToSelect = selectContext.querySelector('#\\30 01-2abc');
      itemToSelect.addEventListener('click', function() {
        assert.isTrue(window.getComputedStyle(itemToSelect)['background-color'] === "rgb(10, 158, 193)");
        done();
      });
      itemToSelect.dispatchEvent(new Event('click'));
    });

    test('Check that clicking on the header again collapses the context path area', function(done) {
      var clickableHeader = selectContext.querySelector('h1');
      clickableHeader.addEventListener('click', function() {
        setTimeout(function(){
          var columnsContainer = selectContext.querySelector('#columnBrowser');
          assert.isTrue(window.getComputedStyle(columnsContainer).width === '1px');
          done();
        }, 50);
      });
      clickableHeader.dispatchEvent(new Event('click'));
    });

  });
}
