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

import 'px-progress-bar/px-progress-bar.js';
import './css/px-context-browser-panel-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-context-browser-panel-styles"></style>
    <div class="pointer"></div>

    <div class="panel-body">
      <slot name="header"></slot>
      <slot name="filter"></slot>
      <template is="dom-if" if="[[showLoadingBar]]">
        <px-progress-bar value="100" min="0" max="100" infinite=""></px-progress-bar>
      </template>
      <slot name="contextual-notification"></slot>
      <slot name="columns"></slot>
    </div>
`,

  is: 'px-context-browser-panel',

  properties: {
    showLoadingBar: {
      type: Boolean,
      value: false
    }
  }
})
