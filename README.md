# px-context-browser [![Build Status](https://travis-ci.org/PredixDev/px-context-browser.svg?branch=master)](https://travis-ci.org/PredixDev/px-context-browser)

## Overview

`px-context-browser` is a component that allows users to navigate through a graph of assets (like physical places or equipment) and select a specific asset they want to inspect. Other pieces of a web app can bind to the context — the asset the user selects - and use that information to update the UI with relevant information about that asset.

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
bower install px-context-browser --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-context-browser/px-context-browser.html"/>
```

Finally, use the component in your application:

```
<iron-ajax url="<URL.json>" last-response="{{browserContext}}" auto></iron-ajax>
<px-context-browser browserContext={{browserContext}}></px-context-browser>
```

<br />
<hr />

## Documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-context-browser).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-context-browser/issues) to submit any bugs you might find.
