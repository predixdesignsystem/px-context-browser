// This will be an automatically-generated variable based on the component
// name provided to the pxtestkit yeoman generator
var px_context_browser_1;

var browserContext = {
"data": [
    {
        "identifier": "001-1",
        "name": "Lots of Children",
        "isOpenable" : true,
        "hasChildren": true
    },
    {
      "identifier": "001-2",
      "name": "Deep nested",
      "isOpenable" : true,
      "children": [
            {
                "identifier": "001-2a",
                "name": "Nested Child 1",
                "isOpenable" : true,
                "children": [
                  {
                    "identifier": "001-2aa",
                    "name": "Nested Grandchild 1",
                    "isOpenable" : true,
                    "children" : [{
                      "identifier": "001-2aba",
                      "name": "Nested Great Grandchild 1",
                      "isOpenable" : true
                    },
                    {
                      "identifier": "001-2abb",
                      "name": "Nested Great Grandchild 2",
                      "isOpenable" : true
                    },
                    {
                      "identifier": "001-2abc",
                      "name": "Nested Great Grandchild 3",
                      "isOpenable" : true,
                      "selectedAsset": true
                    }],
                    "meta": { "parentId": "001-2ab" }
                  },
                  {
                    "identifier": "001-2ab",
                    "name": "Nested Grandchild 2",
                    "isOpenable" : true
                  },
                  {
                    "identifier": "001-2ac",
                    "name": "Nested Grandchild 3",
                    "isOpenable" : true
                  }
                ],
                "meta": { "parentId": "001-2a" }
            },
            {
              "identifier": "001-2b",
              "name": "Nested Child 2",
              "isOpenable" : true
            },
            {
              "identifier": "001-2c",
              "name": "Nested Child 3",
              "isOpenable" : true
            }
        ],
        "meta": { "parentId": "001-2" }
    },
    {
    "identifier": "001-3",
    "name": "Nothing Below Me",
    "isOpenable" : true
    },
    {
    "identifier": "001-4",
    "name": "Nothing Below, Not openable"
   }
],
"meta": { "parentId": null }
};

var lotsOfChildren = {
  "data": [
    {
      "name": "A",
      "identifier": "001-1a"
    }, {
      "name": "B",
      "identifier": "001-1b"
    }, {
      "name": "C",
      "identifier": "001-1c"
    }, {
      "name": "D",
      "identifier": "001-1d"
    }, {
      "name": "E",
      "identifier": "001-1e"
    }, {
      "name": "F",
      "identifier": "001-1f"
    }, {
      "name": "G",
      "identifier": "001-1g"
    }, {
      "name": "H",
      "identifier": "001-1h"
    }, {
      "name": "I",
      "identifier": "001-1i"
    }, {
      "name": "AA",
      "identifier": "001-1aa"
    }, {
      "name": "BB",
      "identifier": "001-1bb"
    }, {
      "name": "CC",
      "identifier": "001-1cc"
    }, {
      "name": "DD",
      "identifier": "001-1dd"
    }, {
      "name": "EE",
      "identifier": "001-1ee"
    }, {
      "name": "FF",
      "identifier": "001-1ff"
    }, {
      "name": "GG",
      "identifier": "001-1gg"
    }, {
      "name": "HH",
      "identifier": "001-1hh"
    }, {
      "name": "II",
      "identifier": "001-1ii"
    }, {
      "name": "AAA",
      "identifier": "001-1aaa"
    }, {
      "name": "BBB",
      "identifier": "001-1bbb"
    }, {
      "name": "CCC",
      "identifier": "001-1ccc"
    }, {
      "name": "DDD",
      "identifier": "001-1ddd"
    }, {
      "name": "EEE",
      "identifier": "001-1eee"
    }, {
      "name": "FFF",
      "identifier": "001-1fff"
    }, {
      "name": "GGG",
      "identifier": "001-1ggg"
    }, {
      "name": "HHH",
      "identifier": "001-1hhh"
    }, {
      "name": "III",
      "identifier": "001-1iii"
    }
  ],
  "meta": {
    "parentId": "001-1"
  }
};

var deepNestedChildren = {
  "data": [{
    "name": "Nested Child 1",
    "identifier": "001-2a",
    "isOpenable": true,
    "hasChildren": true
  },
  {
    "name": "Nested Child 2",
    "identifier": "001-2b",
    "isOpenable": true
  },
  {
    "name": "Nested Child 3",
    "identifier": "001-2c",
    "isOpenable": true
  }],
  "meta": {
    "parentId": "001-2"
  }
};

var deepNestedGrandchildren = {
  "data": [
    {
      "name": "Nested Grandchild 1",
      "identifier": "001-2aa",
      "isOpenable": true,
      "hasChildren": true
    },{
      "name": "Nested Grandchild 2",
      "identifier": "001-2ab",
      "isOpenable": true
    },
    {
      "name": "Nested Grandchild 3",
      "identifier": "001-2ac",
      "isOpenable": true
    }
  ],
  "meta": {
    "parentId": "001-2a"
  }
};

var deepNestedGreatGrandchild = {
  "data": [{
    "name": "Nested Great Grandchild 1",
    "identifier": "001-2aba",
    "isOpenable": true
  },
  {
    "name": "Nested Great Grandchild 2",
    "identifier": "001-2abb",
    "isOpenable": true
  },
  {
    "name": "Nested Great Grandchild 3",
    "identifier": "001-2abc",
    "isOpenable": true
  }],
  "meta": {
    "parentId": "001-2aa"
  }
};

var mockChildren = {
  "001-1": lotsOfChildren,
  "001-2": deepNestedChildren,
  "001-2a": deepNestedGrandchildren,
  "001-2aa": deepNestedGreatGrandchild
};

function demoGetChildren(node) {
  var nodeId = node.identifier,
      deferred = Q.defer(),
      nodeIds = {
        "001-1": "../lotsOfChildren.json",
        "001-2": "../deepNestedChildren.json",
        "001-2a":"../deepNestedGrandchildren.json",
        "001-2aa": "../deepNestedGreatGrandchild.json"
      };
  if (nodeIds[nodeId]) {
    setTimeout(function() {
      deferred.resolve(mockChildren[nodeId])
    }, 50);
  }
  else {
    deferred.resolve({ data: [], meta: { parentId: nodeId } });
  }
  //don't forget to return the promise!
  return deferred.promise;
}

// This is the bootstrapping function that will run the base and custom tests
// upon the completion of web components construction by Polymer
document.addEventListener("WebComponentsReady", function() {
  var contextBrowser = document.querySelector('#px_context_browser_1');
  contextBrowser.handlers = {
    getChildren: function(parent, newIndex) {
      return demoGetChildren(parent);
    },
    itemOpenHandler: function(context) {
      console.log('Opened: ', context);
    }
  };
  runBaseTests();
  runCustomTests();
});

// This function replaces the first character of a CSS selector segment that
// starts with a numeric digit with the Unicode representation, so that it
// can be accepted as valid by functions such as 'querySelector()'
function unicodeNumericSelectorStart(cssSelectorSegment) {
  var validCSSSelector = "", digitsArray = "0123456789", selectorStart = "";
  // if input is bad, just give it back
  if (cssSelectorSegment === null || cssSelectorSegment === "" || !(typeof cssSelectorSegment === "string") ) {
    return cssSelectorSegment;
  }
  // get first character of input
  selectorStart = cssSelectorSegment.substring(0,1);
  // if first character is digit
  if (digitsArray.indexOf(selectorStart) >= 0) {
    // replace it with corresponding Unicode string
    validCSSSelector = "\\\\3" + selectorStart + " " + cssSelectorSegment.substring(1);
  }
  // else just return the same input
  else {
    validCSSSelector = cssSelectorSegment;
  }
  return validCSSSelector;
}

// This is a utility/wrapper function for the test() function of
// web-component-tester;  the developer can use this to specify tests
// through a configuration object instead of repeatedly writing the test
// case construction and assertion code patterns
/**
 *
 * testCase(options) :
 * Utility wrapper for web-component-tester's test() function to perform the
 * most common test cases.  Accepts a configuration object that determines
 * how test() will be called (e.g., synchronously/asynchronously, event string
 * to use, etc). Each call to testCase corresponds to exactly 1 call to test().
 *
 * options : test configuration object that accepts the following properties
 *
 *   description : optional
 *   The description for the test case
 *
 *   root : required
 *   The innermost HTML node which is ancestor to any and all nodes that are
 *   involved in the test case. root can be specified either as a CSS selector
 *   string or an HTMLElement.  For the former case, the element located by
 *   document.querySelector(root) will be used.
 *
 *   eventSource : optional
 *   The element from which the specified event will be dispatched.  eventSource
 *   can be specified either as a CSS selector string or an HTMLElement.  For
 *   the former case, the element located by root.querySelector(eventSource)
 *   will be used to dispatch the event from.  This means that if eventSource
 *   was specified as a CSS selector string, the event will be dispatched from
 *   and element that is a descendant of root.  For eventSource specified as
 *   an HTML element, the event source element can be any element in the DOM,
 *   and not necessarily a descendant of root.
 *
 *   eventChain: optional
 *   The eventChain is a collection/array of objects with the following
 *   structure: { eventSource, eventString, modifyFunction } that are processed
 *   in sequence by this function (testCase), to provide the simulation of tests
 *   that involve a series of interactions from the end user.
 *   At each stage of the series these steps are perfomed: an eventCallback is
 *   added as an event listener to eventSource for the eventString event,
 *   modifyFunction is called with rootElement as argument, then an event with
 *   eventString is dispatched from eventSource.  The eventCallback added
 *   earlier performs the same set of steps for the next stage.  If all stages
 *   (all elements of the eventChain array) have been processed, eventCallback
 *   finally calls assertFunction instead.
 *
 *   event : optional
 *   The event string for the event that will be dispatched from event source.
 *   Specifying the event string will run the test() function asynchronously
 *   (i.e., callback will have the 'done' parameter used by Mocha in
 *   asynchronous test cases).
 *
 *   modifyFunction : optional
 *   A function that will be called before the event is dispatched, for an
 *   asynchronous test.  The developer can use modifyFunction to perform
 *   anything such as modifying the DOM to set up the test.  modifyFunction is
 *   presently guaranteed to work only synchronously (i.e., no event or timer
 *   callbacks involved).
 *
 *   assertFunction :
 *   The assertion function that will used to test the case.  This function
 *   must return true or false.
**/

function testCase(options) {
  var testDescription, rootElement, eventSource, eventString, eventChain, modifyFunction, assertFunction;
  var isAsync = false;
  var eventStr, eventSrc, modFn, assertFn;
  function _failTest(message) {
    test(message, function() {
      assert.isTrue(false);
    });
  }
  if (typeof options === 'object') {
    testDescription = options['description'] || 'No test description provided';
    rootElement = options['root'] || document;
    eventSource = options['eventSource'] || '';
    eventString = options['event'] || '';
    modifyFunction = options['modifyFunction'];
    assertFunction = options['assertFunction'] || function() { return true; };
    eventChain = options['eventChain'] ||
      [{ 'eventSource': eventSource, 'eventString': eventString, 'modifyFunction': modifyFunction }];
  }
  // fail the test if options was not provided
  else {
    _failTest(testDescription + ' Invalid test spec');
    return;
  }

  function _deriveRoot() {
    if (typeof rootElement === 'string') {
      rootElement = document.querySelector(rootElement);
    }
  }

  // if test is asynchronous (i.e., eventString is non-blank or non-empty eventChain was provided)
  if (eventString !== '' || (eventChain instanceof Array && eventChain.length > 0)) {
    isAsync = true;
  }
  // at this point eventSource is guaranteed to be an HTML element
  if (isAsync) {
    if (eventChain === []) {
      eventChain = [{'eventSource': eventSource, 'eventString': eventString, 'modifyFunction': modifyFunction}];
    }
    test(testDescription, function(done) {
      thisDone = done;
      _deriveRoot();
      if (!(rootElement instanceof HTMLElement) && !(rootElement instanceof HTMLDocument)) {
        assert.isTrue(false);
        done();
        return;
      }

      // Add the interactions specified in the eventChain argument:
      // The interactions are added in reverse order of event dispatching
      // because of the general fact that event listeners are added before
      // corresponding events are dispatched.

      // Utility function that uses closure to generate callbacks for each event
      // Without closure the test infinite-loops on the 2nd event;
      function createCallback(eventSource, eventString, modifyFunction, rootElement) {
        return function() {
          if (modifyFunction instanceof Function) {
            modifyFunction(rootElement);
          }
          eventSource.dispatchEvent(new Event(eventString));
        }
      }
      // TODO: add validation on the eventChain structure and content types
      for (var ecLength = eventChain.length, ecIndex = ecLength-1; ecIndex >= 0; ecIndex--) {
        eventStr = eventChain[ecIndex].eventString;
        eventSrc = document.querySelector(eventChain[ecIndex].eventSource);
        if (ecIndex === (ecLength-1)) {
          eventSrc.addEventListener(eventStr, function() {
            assertFunction(rootElement);
            thisDone();
          });
        }
        else {
          modFn = eventChain[ecIndex].modifyFunction;
          var prevEventSrc = document.querySelector(eventChain[ecIndex+1].eventSource);
          var prevEventStr = eventChain[ecIndex+1].eventString;
          eventSrc.addEventListener(eventStr,
            createCallback(
              document.querySelector(eventChain[ecIndex+1].eventSource),
              eventChain[ecIndex+1].eventString,
              modFn,
              rootElement
            )
          );
        }
      }
      eventSrc.dispatchEvent(new Event(eventStr));
    })
  }
  else {
    test(testDescription, function() {
      _deriveRoot();
      if (!(rootElement instanceof HTMLElement) && !(rootElement instanceof HTMLDocument)) {
        assert.isTrue(false);
        return;
      }
      assert.isTrue(assertFunction(rootElement));
    })
  }
}

// Wrapper for base automation tests.  This function is automatically
// generated by the pxtestkit yeoman generator
function runBaseTests() {
  px_context_browser_1 = document.getElementById('px_context_browser_1');

  px_context_browser_1.browserContext = browserContext;

  suite('Base Automation Tests for px-context-browser', function() {

    test('Polymer exists', function() {
      assert.isTrue(Polymer !== null);
    });
    test('px-context-browser fixture is created', function() {
      assert.isTrue(document.getElementById('px_context_browser_1') !== null);
    });

  });
};
