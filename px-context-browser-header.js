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

import 'px-icon-set/px-icon-set-navigation.js';
import 'px-icon-set/px-icon.js';
import './css/px-context-browser-header-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-context-browser-header-styles"></style>

    <div class="context-browser-header-label" asset-action="back">
      <div class="context-browser-header-label__arrow">
        <px-icon icon="px-nav:back"></px-icon>
      </div>
      <div class="context-browser-header-label__link">
        [[label]]
      </div>
    </div>
    <div class="actions">
      <template is="dom-if" if="[[canFavorite]]">
        <px-context-browser-action-favorite class\$="action [[_isLastAction('favorite', canSelect, canFavorite)]]" active\$="{{favorited}}" asset-action="favorite"></px-context-browser-action-favorite>
      </template>
      <template is="dom-if" if="[[canSelect]]">
        <px-context-browser-action-select class\$="action [[_isLastAction('select', canSelect, canFavorite)]]" asset-action="select"></px-context-browser-action-select>
      </template>
    </div>
`,

  is: 'px-context-browser-header',

  properties: {
    label: {
      type: String
    },
    favorited: {
      type: Boolean,
      value: false
    },
    canSelect: {
      type: Boolean,
      value: false
    },
    canFavorite: {
      type: Boolean,
      value: false
    }
  },

  _isLastAction(action, canSelect, canFavorite) {
    if ((canSelect && canFavorite && action === 'select') ||
        (canSelect && !canFavorite && action === 'favorite')) {
      return 'action--last';
    }
    return '';
  }
})
