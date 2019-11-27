/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
### Usage

    <px-context-browser-trigger trigger={{openTrigger}}></px-context-browser-trigger>
    <px-context-browser open-trigger="[[openTrigger]]" items='[{"label":"Home","id":"home"},{"label":"Alerts","id":"alerts"},{"label":"Assets","id":"assets"}]'></px-context-browser>


@element px-context-browser-trigger
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import 'px-icon-set/px-icon-set-navigation.js';

import 'px-icon-set/px-icon.js';
import './css/px-context-browser-trigger-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-context-browser-trigger-styles"></style>
    <px-icon icon="[[_getIcon(favorited)]]"></px-icon>
`,

  is: 'px-context-browser-trigger',

  properties: {
    /**
     * Read-only reference to the trigger element. Data-bind this property
     * into the px-context-browser `openTrigger` or `favoritedTrigger`
     * property to open the context browser when this icon is tapped.
     */
    trigger: {
      type: HTMLElement,
      readOnly: true,
      notify: true,
      value: null
    },

    /**
     * Enable to use this trigger to open the px-context-browser favorited
     * panel. If enabled, bind this element's `trigger` property to the
     * context browser's `favoritedTrigger` property.
     */
    favorited: {
      type: Boolean,
      value: false
    }
  },

  attached() {
    this._setTrigger(this);
  },

  detached() {
    this._setTrigger(null);
  },

  listeners: {
    'tap' : '_handleTapped'
  },

  _handleTapped(evt) {
    evt.preventDefault();
    this.fire('trigger-tapped');
  },

  _getIcon(favorites) {
    if (favorites === true) {
      return 'px-nav:favorite';
    }
    return 'px-nav:hierarchy'
  }
})
