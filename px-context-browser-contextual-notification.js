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

import 'px-notification/px-notification.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <px-notification type="info" content="[[text]]" action-icon="px-nav:reload" opened="[[opened]]"></px-notification>
`,

  is: 'px-context-browser-contextual-notification',

  properties: {
    text: {
      type: String,
      value: 'Your favorites list failed to sync.'
    },
    opened: {
      type: Boolean,
      value: false
    }
  },

  listeners: {
    'px-notification-action-tapped': 'syncFavorites'
  },

  syncFavorites() {
    this.fire('px-app-asset-favorited-sync-requested');
  }
});
