// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  var selectContext = Polymer.dom(document).querySelector('#px_context_browser_1');
  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases

  suite('Custom Automation Tests for px-context-browser with typeahead functionality', function() {
    test('Check that clicking on the header shows the search box', function(done) {
      var clickableHeader = Polymer.dom(selectContext.root).querySelector('h1');
      clickableHeader.addEventListener('click', function expandListener() {
        flush(function() {
          var columnsContainer = Polymer.dom(selectContext.root).querySelector('#columnBrowser');
          var pxContextTypeaheadComp = Polymer.dom(columnsContainer).querySelector('.px-context-browser-typeahead-0');
          var searchTextbox = Polymer.dom(pxContextTypeaheadComp.root).querySelector('.px-context-browser-typeahead-searchbox');
          var textVal = searchTextbox.getAttribute('placeholder');
          assert.isTrue(textVal === "Search..");
          done();
        });
      });
      clickableHeader.dispatchEvent(new Event('click'));
    });

    test('Check that  typing on the search box shows the close icon', function(done) {
      var columnsContainer = Polymer.dom(selectContext.root).querySelector('#columnBrowser');
      var pxContextTypeaheadComp = Polymer.dom(columnsContainer).querySelector('.px-context-browser-typeahead-0');
      var searchTextbox = Polymer.dom(pxContextTypeaheadComp.root).querySelector('.px-context-browser-typeahead-searchbox');
      searchTextbox.addEventListener('input', function(e){
        flush(function() {
          var closeIcon = Polymer.dom(pxContextTypeaheadComp.root).querySelector('.px-context-browser-typeahead-close-icon');
          assert.isTrue(closeIcon.hidden === false);
          done();
        });
      });
      searchTextbox.value= "l";
      searchTextbox.dispatchEvent(new Event('input'));
    });

    test('Check that  typing on the search box filters the list', function(done) {
      var columnsContainer = Polymer.dom(selectContext.root).querySelector('#columnBrowser');
      var pxContextTypeaheadComp = Polymer.dom(columnsContainer).querySelector('div.columns-3.column-index-2>div:nth-child(3).px-context-browser px-context-browser-typeahead');
      var searchTextboxfilter = Polymer.dom(pxContextTypeaheadComp.root).querySelector('input.px-context-browser-typeahead-searchbox');
      searchTextboxfilter.addEventListener('input', function(e){
        var myUL = Polymer.dom(columnsContainer).querySelector('div.columns-3.column-index-2> div:nth-child(3) ul');
        flush(function() {
          var listItems = Polymer.dom(myUL).querySelectorAll('li');
          assert.equal(myUL.getElementsByTagName('li').length, listItems.length);
          var list = myUL.getElementsByTagName('li').length;
          assert.isTrue(list === 1);
          done();
        });
      });
      searchTextboxfilter.value = "3";
      searchTextboxfilter.dispatchEvent(new Event('input'));
    });

    test('Check that clicking on the close icon clears the search box ', function(done) {
      var columnsContainer = Polymer.dom(selectContext.root).querySelector('#columnBrowser');
      var pxContextTypeaheadComp = Polymer.dom(columnsContainer).querySelector('.px-context-browser-typeahead-0');
      var searchTextbox = Polymer.dom(pxContextTypeaheadComp.root).querySelector('.px-context-browser-typeahead-searchbox');
      var closeIcon = Polymer.dom(pxContextTypeaheadComp.root).querySelector('.px-context-browser-typeahead-close-icon');
      closeIcon.addEventListener('click', function() {
        flush(function() {
          assert.isTrue(searchTextbox.value === "");
          done();
        });
      });
      closeIcon.dispatchEvent(new Event('click'));
    });

    test('Check that when show-column-typeahead is false it should not show the search box', function(done) {
      var selectContext2 = Polymer.dom(document).querySelector('#px_context_browser_3');
      var clickableHeader = Polymer.dom(selectContext2.root).querySelector('h1');
      clickableHeader.addEventListener('click', function expandListener() {
        flush(function() {
          var columnsContainer = Polymer.dom(selectContext2.root).querySelector('#columnBrowser');
          var pxContextTypeaheadComp = Polymer.dom(columnsContainer).querySelector('.px-context-browser-typeahead-0');
          //var searchTextbox = Polymer.dom(pxContextTypeaheadComp.root).querySelector('.px-context-browser-typeahead-searchbox');
          assert.isTrue(pxContextTypeaheadComp === null);
          done();
        });
      });
      clickableHeader.dispatchEvent(new Event('click'));
    });
  });
}
