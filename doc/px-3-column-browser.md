Docs / exmaples go here...Multiple examples for developers, explanatory copy, etc.

Although related, this is /not/ the same as the test fixtures -- test fixtures are bare bones and separate b/c the needed configurations are different.

Tests are tests, docs are docs.

<!-- Requires Webcomponents.js polyfill is provided by the page for browsers that don't support html imports -->
<script src="../../../bower_components/webcomponentsjs/webcomponents.js"></script>


<!-- Import Custom Elements -->
<link rel="import" href="../../dist/px-3-column-browser.html"/>

<!-- instance 1, "predix" theme -->
<px-3-column-browser
        treedata='[{"name":"Mustang","identifier":"001-1","nodeIdentifier":"001-1","hasChildren":true,"entity":true,"entityType":"top1","category":"parent","classification":"car", "children":[{"name":"Another Thing","identifier":"001-4","nodeIdentifier":"001-4","hasChildren":false,"entity":true,"entityType":"top4","category":"top1","classification":"car"},{"name":"Something","identifier":"001-5","nodeIdentifier":"001-5","hasChildren":false,"entity":true,"entityType":"top5","category":"top1","classification":"car"},{"name":"Yet Another Thing","identifier":"001-6","nodeIdentifier":"001-6","hasChildren":false,"entity":true,"entityType":"top6","category":"top1","classification":"car"}]},{"name":"Sandy Bridges","identifier":"001-2","nodeIdentifier":"001-2","hasChildren":true,"entity":true,"entityType":"top2","category":"parent","classification":"bridge", "children": [{"name":"Nothing Below Me","identifier":"001-3","nodeIdentifier":"001-3","hasChildren":false,"entity":false,"entityType":"top3","category":"top2","classification":"car"}]}]'
        handlers="{}"
        labelField="name"
        parentIdField="category"
        idField="entityType"
        treeDisplayLevels="3"
        childKey="children">
</px-3-column-browser>