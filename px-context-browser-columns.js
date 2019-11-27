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

import './css/px-context-browser-columns-styles.js';
import './css/px-context-browser-animations-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
Polymer({
  _template: html`
    <style include="px-context-browser-columns-styles"></style>
    <style include="px-context-browser-animations-styles"></style>

    <div id="columns" class="column-animation">
      <slot name="columns"></slot>
    </div>
`,

  is: 'px-context-browser-columns',

  properties: {
    active: {
      type: Number,
      observer: '_activeChanged'
    },
    _activeEl: {
      type: HTMLElement,
      observer: '_activeElChanged'
    },
    _animateInEl: {
      type: HTMLElement,
      observer: '_animateInElChanged'
    },
    _animateOutEl: {
      type: HTMLElement,
      observer: '_animateOutElChanged'
    }
  },

  created: function() {
    this._onAnimateInEnd = null;
    this._onAnimateOutEnd = null;
    this._animateClassNames = {
      FADE_IN_RIGHT:  'fade-in-right',
      FADE_IN_LEFT:   'fade-in-left',
      FADE_OUT_RIGHT: 'fade-out-right',
      FADE_OUT_LEFT:  'fade-out-left'
    };
  },

  attached: function() {
    this._observer = dom(this.$.columns).observeNodes(function(info) {
      if (typeof this.active === 'number' && !this._activeEl) {
        this._activeChanged(this.active);
      }
    }.bind(this));
  },

  detached: function() {
    dom(this.$.columns).unobserveNodes(this._observer);
  },

  _activeChanged: function(nextActive, lastActive) {
    var nextActiveEl = dom(this).querySelector('[column="'+nextActive+'"]');
    if (typeof nextActive === 'number' && nextActive !== this._activeEl) {
      this._animateInClassName = (nextActive > (lastActive||0)) ? this._animateClassNames.FADE_IN_LEFT : this._animateClassNames.FADE_IN_RIGHT;
      this._animateOutClassName = (nextActive > (lastActive||0)) ? this._animateClassNames.FADE_OUT_LEFT : this._animateClassNames.FADE_OUT_RIGHT;
      this._activeEl = nextActiveEl;
    }
  },

  _activeElChanged: function(nextEl, lastEl) {
    if (lastEl && lastEl !== this._animateOutEl) {
      this._animateOutEl = lastEl;
    }
    if (nextEl && nextEl !== this._animateInEl) {
      this._animateInEl = nextEl;
    }
  },

  _animateInElChanged: function(nextEl, lastEl) {
    // Special case: skip animation if this is the first item that has moved
    // in, just show it and return.
    if (!lastEl) {
      nextEl.classList.add('active');
      return;
    }
    if (this._onAnimateInEnd && lastEl) {
      this._onAnimateInEnd();
    }
    this._onAnimateInEnd = this._setupAnimateIn(nextEl, this._animateInClassName);
  },

  _animateOutElChanged: function(nextEl, lastEl) {
    if (this._onAnimateOutEnd && lastEl) {
      this._onAnimateOutEnd();
    }
    this._onAnimateOutEnd = this._setupAnimateOut(nextEl, this._animateOutClassName);
  },

  _setupAnimateIn: function(el, animateClassName) {
    var listener = this._teardownAnimateIn.bind(this, el, animateClassName);
    el.addEventListener('animationend', listener);

    if (!el.classList.contains('animating')) {
      el.classList.add('animating');
    }
    if (!el.classList.contains(animateClassName)) {
      el.classList.add(animateClassName);
    }

    return listener;
  },

  _setupAnimateOut: function(el, animateClassName) {
    var listener = this._teardownAnimateOut.bind(this, el, animateClassName);
    el.addEventListener('animationend', listener);

    if (!el.classList.contains('animating')) {
      el.classList.add('animating');
    }
    if (el.classList.contains('active')) {
      el.classList.remove('active');
    }
    if (!el.classList.contains(animateClassName)) {
      el.classList.add(animateClassName);
    }

    return listener;
  },

  _teardownAnimateIn: function(el, animateClassName) {
    if (!el.classList.contains('active')) {
      el.classList.add('active');
    }
    if (el.classList.contains('animating')) {
      el.classList.remove('animating');
    }
    if (el.classList.contains(animateClassName)) {
      el.classList.remove(animateClassName);
    }

    el.removeEventListener('animationend', this._onAnimateInEnd);
    this._onAnimateInEnd = null;
  },

  _teardownAnimateOut: function(el, animateClassName) {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
    }
    if (el.classList.contains('animating')) {
      el.classList.remove('animating');
    }
    if (el.classList.contains(animateClassName)) {
      el.classList.remove(animateClassName);
    }

    el.removeEventListener('animationend', this._onAnimateOutEnd);
    this._onAnimateOutEnd = null;
  }
})
