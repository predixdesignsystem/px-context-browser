Docs / exmaples go here...Multiple examples for developers, explanatory copy, etc.

Although related, this is /not/ the same as the test fixtures -- test fixtures are bare bones and separate b/c the needed configurations are different.

Tests are tests, docs are docs.

<!-- Requires Webcomponents.js polyfill is provided by the page for browsers that don't support html imports -->
<script src="../lib/webcomponentsjs/webcomponents.js"></script>

<!-- Import component dependencies separately here b/c component src is optimized for consumption over bower,
and therefore assumes it is a sibling to these dependencies -->
<link rel="import" href="../lib/polymer/polymer.html"/>

<!-- Import Custom Elements -->
<link rel="import" href="../dist/px-3-column-browser.html"/>
<link rel="import" href="../dist/px-3-column-browser-sketch.html"/>

<!-- instance 1, "predix" theme -->
Predix theme: <px-3-column-browser counterValue="1">&spades;</px-3-column-browser>

<!-- instance 2, "sketch" theme -->
Sketch theme: <px-3-column-browser-sketch counterValue="2">&hearts;</px-3-column-browser-sketch>