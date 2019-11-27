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

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
Polymer({
  is: 'px-context-browser-favorited-temp',
  properties: {
    favoritedBehaviorElement: HTMLElement,
    favorited: Array,
    opened: Boolean,
    favoritedOpened: Boolean,
    _itemsToRemove: {
      type: Array,
      value: () => []
    },
    currentFavorited: {
      type: Array,
      value: () => [],
      notify: true,
      readOnly: true
    }
  },

  observers: [
    '_handleOpenedChanged(opened, favoritedOpened)',
    '_computeCurrentFavorited(favorited, _itemsToRemove, favorited.*)'
  ],

  created() {
    this._flushFavoritedChangesTask = null;
  },

  ready() {
    this.currentFavorited = this._computeCurrentFavorited(this.favorited, this._itemsToRemove);
  },

  /**
   * Call when an item is interacted with by the user. The favorited cop will
   * decide if it should be synced with favorited right away or stored in
   * a temporary list to be synced later.
   *
   * @param  {Object} item - Reference to an item in the asset graph
   */
  handleItemTapped(item) {
    if (!this.favoritedOpened) {
      if (this.currentFavorited.indexOf(item) === -1) {
        this.favoritedBehaviorElement.favorite(item);
      }
      else {
        this.favoritedBehaviorElement.defavorite(item);
      }
    }

    if (this.favoritedOpened) {
      if (this._itemsToRemove.indexOf(item) === -1) {
        this._itemsToRemove = this._itemsToRemove.concat([item]);
      }
      else {
        this._itemsToRemove = this._itemsToRemove.filter(i => i !== item);
      }
    }
  },

  /**
   * Call this method when the state of `favorited` should be reconciled with
   * any outstanding changes that need to be made. Outstanding changes are
   * the "temporary" list of changes we need to make that haven't taken
   * effect.
   */
  flushFavoritedChanges() {
    this._itemsToRemove.forEach(item => {
      this.favoritedBehaviorElement.defavorite(item);
    });
    this._itemsToRemove = [];
  },

  _computeCurrentFavorited(favorited, itemsToRemove) {
    this.debounce('compute-current-favorited', () => {
      if (Array.isArray(favorited) && Array.isArray(itemsToRemove)) {
        this._setCurrentFavorited(favorited.filter(fav => itemsToRemove.indexOf(fav) === -1));
      }
    });
  },

  _handleOpenedChanged(opened, favoritedOpened) {
    if (this._flushFavoritedChangesTask) {
      this.cancelAsync(this._flushFavoritedChangesTask);
      this._flushFavoritedChangesTask = null;
    }
    if (opened) {
      this.flushFavoritedChanges();
    }
    if (!opened && !favoritedOpened) {
      this._flushFavoritedChangesTask = this.async(this.flushFavoritedChanges.bind(this), 5000);
    }
  }

});
