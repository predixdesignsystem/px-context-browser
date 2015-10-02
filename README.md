# Px-Context-Browser

Px-Context-Browser is a navigation tree navigation component.

## Overview

Px-Context-Browser is a hierarchical tree navigation component that uses horizontally cascading lists in columns to allow multiple levels of the hierarchy to be open at once, and provide a visual representation of the current location. Menu items that are `openable` are given an Open button that upon selection chooses the item and closes the navigation, returning it to it's initial state: A drop-down and breadcrumb that display the menu's last-selected state.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install https://github.com/PredixDev/px-context-browser.git --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-context-browser/px-context-browser.html">
</link>
```

Finally, use the component in your application:

```
<px-context-browser></px-context-browser>
```

<br />
<hr />

## Attributes

#### label-field

*Type:* **String** - (*Optional*) - *Default:* "name"

Mapping for the field name in the context data that represents the display label for an item. This property allows data of any form/keys to be used as long as it has the notion of a 'display label' in it.

```
<px-context-browser
	...
	label-field="Custom Name">
</px-context-browser>
```

#### id-field

*Type:* **String** - (*Optional*) - *Default:* "id"

Mapping for the field name in the context data that represents a unique id for an item. This property allows data of any form/keys to be used as long as it has the notion of a 'unique id' in it.

```
<px-context-browser
	...
	id-field="1.3">
</px-context-browser>
```

#### initial-contexts

*Type:* **Object** - (*Required:*) - *Default:* null

Starting level of context. Contains an Array of items that include keys that match the "idField" and "labelField" properties on this component. Required. Setting this property is essentially this component's 'main' function.

```html
<px-context-browser
	...
	initial-contexts='{
        data: [{
          "description": "Turbine 1",
          "identifier": "001-1",
          "parent": "top",
          "hasChildren": true
        }, {
          "description": "Turbine 2",
          "identifier": "001-2",
          "parent": "top",
          "hasChildren": true
        }],
        meta: {
          parentId: null
        }
    }'>
</px-context-browser>
```


#### selected-item-id

*Type:* **String** - (*Optional*) - *Default:* null

Id of item currently selected, reflected back as an attribute so application can detect which item is selected, for example via [ng-bind-polymer](https://github.com/PredixDev/ng-bind-polymer).

```
<px-context-browser
	...
	selected-item-id="1">
</px-context-browser>
```

#### handlers

*Type:* **Object** - (*Optional*) - *Default:* null

Object defining some or all of the following functions as members: `itemOpenHandler`, `itemClickHandler`, and `getChildren`.

```
<px-context-browser id="my-content-browser"></px-context-browser>
```

```javaScript
var colBrowser = document.querySelector('#my-context-browser');
colBrowser.handlers = {
    itemOpenHandler: function(item) {
        // returns special callback behavior when
        // a given context item is opened
    },
    itemClickHandler: function(item) {
        // returns special callback behavior when
        // a given context is selected
    },
    getChildren: function (parent, startIdx) {
        // returns a JavaScript promise that will
        // resolve to children of the item and
        // starting with the given index (to support lazy loading)
    }
};
```

#### opened-item-name

*Type:* **String** - (*Optional*) - *Default:* "Selected Context"

Initial context name to be shown on page which defaults to 'Selected Context'.

```
<px-context-browser
	...
	open-item-name="Special open item name">
</px-context-browser>
```

#### show-column-browser

*Type:* **Boolean** - (*Optional*) - *Default:* False

Flag to show/hide column browser.

```
<px-context-browser
	...
	show-column-browser="true">
</px-context-browser>
```

<br />
<hr />


## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ grunt sass
```

From the component's directory, to start a local server run:

```
$ grunt depserve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### LiveReload

By default grunt watch is configured to enable LiveReload and will be watching for modifications in your root directory as well as `/css`.

Your browser will also need to have the LiveReload extension installed and enabled. For instructions on how to do this please refer to: [livereload.com/extensions/](http://livereload.com/extensions/).

Disable LiveReload by removing the `livereload` key from the configuration object or explicitly setting it to false.


### DevMode
Devmode runs `grunt depserve` and `grunt watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on LiveReload.
From the component's directory run:

```
$ grunt devmode
```

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/COMPONENT/issues) to submit any bugs you might find.
