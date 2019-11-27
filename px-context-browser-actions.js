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
/* Action: Select */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import 'px-icon-set/px-icon-set-navigation.js';

import 'px-icon-set/px-icon.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
      px-icon {
        --iron-icon-height: 1.3333rem;
        --iron-icon-width: 1.3333rem;
      }
      :host(:hover) px-icon,
      :host([active]) px-icon {
        stroke: var(--px-context-browser-icon-select-stroke, darkolivegreen);
        fill: var(--px-context-browser-icon-select-fill, yellowgreen);
      }
    </style>

    <px-icon icon="px-nav:open-context"></px-icon>
`,

  is: 'px-context-browser-action-select'
});
/* Action: Favorite */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
      px-icon {
        --iron-icon-height: 1.3333rem;
        --iron-icon-width: 1.3333rem;
      }
      :host(:hover) px-icon,
      :host([active]) px-icon {
        stroke: var(--px-context-browser-icon-favorite-stroke, darkgoldenrod);
        fill: var(--px-context-browser-icon-favorite-fill, yellow);
      }
    </style>

    <px-icon icon="px-nav:favorite"></px-icon>
`,

  is: 'px-context-browser-action-favorite'
});
/* Action: Open */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
      px-icon {
        --iron-icon-height: 1.3333rem;
        --iron-icon-width: 1.3333rem;
      }
    </style>

    <px-icon icon="px-nav:next"></px-icon>
`,

  is: 'px-context-browser-action-open'
});
