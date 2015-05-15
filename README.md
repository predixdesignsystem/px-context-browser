Px-Context-Browser
-----------------------------------------------

## Overview

Px-Context-Browser is a Predix Experience ('Px') component

## Getting Started

Read https://github.sw.ge.com/pages/PX/technical-principles/

### Basic Usage

Use this component with a template like

```html
    <px-context-browser initial-contexts="{{ ... }}"
                            handlers="{{ ... }}"
                            label-field="{{ ... }}"
                            parent-id-field="{{ ... }}"
                            id-field="{{ ... }}"
                            headers="{{ ... }}"
                            child-key="{{ ... }}"></px-context-browser>
```

### Options

Does this component have runtime configuration options?  If so, they should be able to be passed as attributes on the element with examples shown below.

### Function calls

What is the public API of this component?

### Extending styles

Documented CSS extension points?

### Extending behavior

Polymer composition (prototype mixins) for now. Inheritance: later.

GE Coding Style Guide
---------------------

[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)


### Implementation

It is important to convey that to be able to correctly scroll columns at the container's height the entire component must be flex-box styled with the outer container somehow having a defined height.


### Known Issues

