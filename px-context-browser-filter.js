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
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-icon-set/px-icon.js';
import 'px-icon-set/px-icon-set-utility.js';
import 'px-icon-set/px-icon-set-navigation.js';
import './css/px-context-browser-filter-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-context-browser-filter-styles"></style>
    <!-- <iron-a11y-keys id="a11y" target="[[_searchEl]]" keys="tab" on-keys-pressed="_handleTabKey"></iron-a11y-keys>
    <iron-a11y-keys id="a11y" target="[[_searchEl]]" keys="enter" on-keys-pressed="_handleEnterKey"></iron-a11y-keys>
    <iron-a11y-keys id="a11y" target="[[_searchEl]]" keys="left right up down" on-keys-pressed="_handleArrowKeys"></iron-a11y-keys> -->
    <div class="filter__form">
      <input id="filter" class="text-input filter__box" placeholder="[[placeholder]]" value="{{filter::input}}" autocomplete="off" tabindex="0" on-focus="_handleFocus" on-blur="_handleBlur">
      
      <template is="dom-if" if="[[_showFilterIcon(filter)]]">
         <px-icon class="filter__icon" icon="px-utl:filter"></px-icon>
      </template>
      <template is="dom-if" if="[[_showClearIcon(filter)]]">
        <px-icon id="close" class="filter__icon filter__icon--tappable" tabindex="-1" icon="px-nav:close" on-tap="clearFilter"></px-icon>
      </template>
    </div>
`,

  is: 'px-context-browser-filter',

  properties: {
    filter: {
      type: String,
      notify: true,
      value: ''
    },

    placeholder: {
      type: String
    },

    active: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    filtering: {
      type: Boolean,
      value: false,
      notify: true,
      computed: '_isFilterActive(filter)'
    }
  },

  _handleFocus(evt) {
    evt.stopPropagation();
    this.fire('px-context-browser-filter-focused');
  },

  _handleBlur(evt) {
    evt.stopPropagation();
    this.fire('px-context-browser-filter-blured');
  },

  _isFilterActive(filter) {
    return (typeof filter === 'string' && filter.length > 0);
  },

  _showFilterIcon(filter) {
    return typeof filter === 'string' && filter.length === 0;
  },

  _showClearIcon(filter) {
    return typeof filter === 'string' && filter.length > 0;
  },

  clearFilter() {
    this.filter = '';
  },

  focusFilter() {
    this.$.filter.focus();
  },

  blurFilter() {
    this.$.filter.blur();
  }
});
