'use strict';

/*
 * Copyright (c) 2013 GE Global Research. All rights reserved.
 *
 * The copyright to the computer software herein is the property of
 * GE Global Research. The software may be used and/or copied only
 * with the written permission of GE Global Research or in accordance
 * with the terms and conditions stipulated in the agreement/contract
 * under which the software has been supplied.
 */

/**
 * @class Unit test spec for toggle-switch.
 *
 * Use any Mocha (http://visionmedia.github.io/mocha/), Chai (http://chaijs.com/), or Sinon (http://sinonjs.org/) statements here
 *
 * @author Jeff Reichenberg
 *
 */
define(['px-3-column-browser'], function (component) {



});

/*

 define(['angular', 'mock-objects', 'px-asset-browser', 'angular-mocks', 'widgets-module'], function(angular, mockObjects, PxAssetBrowser) {
 'use strict';

 describe('The Px-Asset-Browser', function() {

 describe('when initialized with arguments', function() {

 var scope, q, defer, rootScope, pxAssetBrowser;

 beforeEach(module('demoModule'));
 beforeEach(inject(function ($rootScope, $q, $log) {
 scope = $rootScope.$new();
 rootScope = $rootScope;
 q = $q;

 scope.treeDisplayLevels = 3;
 scope.labelField = 'name';
 scope.parentIdField = 'category';
 scope.idField = 'entityType';
 scope.headers = [
 'level1','level2','level3','level4','level5'
 ];
 scope.handlers = {
 getChildren: function() {
 defer = q.defer();
 return defer.promise;
 }
 };
 scope.treeData = mockObjects.topLevelData;

 pxAssetBrowser = new PxAssetBrowser();
 pxAssetBrowser.setLogger($log);

 pxAssetBrowser.vLink(scope);
 scope.$digest();
 }));

 it('sets treeDisplayLevels', function () {
 expect(scope.treeDisplayLevels).toBe(3);
 });

 it('sets showBreadcrumbs to true', function () {
 expect(scope.showBreadcrumbs).toBe(true);
 });

 it('sets showOpenButton to true', function () {
 expect(scope.showOpenButton).toBe(true);
 });

 it('an undefined object is not openable', function() {
 var selecteditem;
 expect(scope.isOpenable(selecteditem)).toBe(false);
 });

 it('returns an empty string for the breadcrumb when there is no selectedItem1', function() {
 expect(scope.getBreadcrumb(scope.selectedItem)).toEqual('');
 });

 it('returns an empty string for the breadcrumb when there is no selectedItem2', function() {
 expect(scope.getBreadcrumb({})).toEqual('');
 });

 it('does not call the handlers.itemOpenHandler is there is no selected item', function() {
 scope.handlers.itemOpenHandler = function() {};
 spyOn(scope.handlers, 'itemOpenHandler');

 scope.onOpenClick();
 expect(scope.handlers.itemOpenHandler).not.toHaveBeenCalled();
 });

 it('sets the root node', function() {
 expect(scope.parentNodes.length).toEqual(1);
 });

 it('does not initialize the parent of the root', function() {
 expect(scope.parentNodes[0].parent).toBeUndefined();
 });

 it('no breadcrumbs displayed, so does not show the ellipsis', function() {
 expect(scope.isEllipsisShown()).toBe(false);
 });

 it('sets the first level node values', function() {
 expect(scope.parentNodes[0].children[0][scope.labelField]).toEqual('Mustang');
 expect(scope.parentNodes[0].children[1][scope.labelField]).toEqual('Sandy');
 expect(scope.parentNodes[0].children[2][scope.labelField]).toEqual('Nothing');
 expect(scope.parentNodes[0].children.length).toEqual(3);
 });

 it('sets the first level node parents to itself', function() {
 expect(scope.parentNodes[0].children[0].parent).toEqual(scope.parentNodes[0]);
 });

 it('sets the first level node headers', function() {
 expect(scope.parentNodes[0].header).toEqual('level1');
 });

 it('will display just the first level children', function() {
 expect(scope.displayNodes.length).toBe(1);
 expect(scope.displayNodes[0].children.length).toBe(3);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('Mustang');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('Sandy');
 expect(scope.displayNodes[0].children[2][scope.labelField]).toBe('Nothing');
 });

 it('will display the 1st index breadcrumb, but not -1 or 0', function() {
 expect(scope.isBreadcrumbVisible(1)).toBe(true);
 expect(scope.isBreadcrumbVisible(0)).toBe(false);
 expect(scope.isBreadcrumbVisible(-1)).toBe(false);
 });

 it('sets the level to 0', function() {
 expect(scope.level).toBe(0);
 });

 describe('when a context is clicked', function() {

 beforeEach(function () {
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onRowClick(scope.parentNodes[0].children[1]);
 defer.resolve(mockObjects.secondLevelData);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);
 });

 it('sets the selectedItem to this node', function() {
 expect(scope.selectedItem).toEqual(scope.parentNodes[0].children[1]);
 });

 it('sets the level to 1', function() {
 expect(scope.level).toBe(1);
 });

 it('calls getChildren once', function() {
 expect(scope.handlers.getChildren).toHaveBeenCalled();
 expect(scope.handlers.getChildren.callCount).toBe(1);
 });

 it('sets the correct node in the second level', function() {
 expect(scope.parentNodes[1][scope.labelField]).toEqual('Sandy');
 });

 it('adds the new children to the second level', function() {
 expect(scope.parentNodes[1].children.length).toEqual(2);
 });

 it('adds adds all the third level data', function() {
 expect(scope.parentNodes[1].children[0][scope.labelField]).toEqual('Wheels');
 expect(scope.parentNodes[1].children[1][scope.labelField]).toEqual('Brakes');
 });

 it('sets second level parents correctly', function() {
 expect(scope.parentNodes[1].parent).toEqual(scope.parentNodes[0]);
 });

 it('sets the second level node headers', function() {
 expect(scope.parentNodes[1].header).toEqual('level2');
 });

 it('one breadcrumb displayed, so does not show the ellipsis', function() {
 expect(scope.isEllipsisShown()).toBe(false);
 });

 it('will display the first and second level children', function() {
 expect(scope.displayNodes.length).toBe(2);
 expect(scope.displayNodes[0].children.length).toBe(3);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('Mustang');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('Sandy');
 expect(scope.displayNodes[0].children[2][scope.labelField]).toBe('Nothing');
 expect(scope.displayNodes[1].children.length).toBe(2);
 expect(scope.displayNodes[1].children[0][scope.labelField]).toBe('Wheels');
 expect(scope.displayNodes[1].children[1][scope.labelField]).toBe('Brakes');
 });

 it('will display the 1st and 2nd breadcrumb', function() {
 expect(scope.isBreadcrumbVisible(1)).toBe(true);
 expect(scope.isBreadcrumbVisible(2)).toBe(true);
 });

 it('will not be openable if there is no handlers.isOpenable method', function() {
 expect(scope.isOpenable(scope.selectedItem)).toBe(false);
 });

 it('calls the handlers.itemOpenHandler is there is a selected item with the breadcrumbs before this', function() {
 scope.handlers.itemOpenHandler = function() {};
 spyOn(scope.handlers, 'itemOpenHandler');

 scope.onOpenClick();
 expect(scope.handlers.itemOpenHandler).toHaveBeenCalledWith(
 scope.selectedItem, ['']);
 });

 it('returns the breadcrumb for the node', function() {
 expect(scope.getBreadcrumb(scope.selectedItem)).toEqual('Sandy');
 });

 describe('when a 2nd context is clicked', function() {

 beforeEach(function () {
 scope.handlers.getChildren.isSpy = false; // clear the spy to restart it
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 scope.handlers.isOpenable = function() {
 return false;
 };

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onRowClick(scope.parentNodes[1].children[0]);
 defer.resolve(mockObjects.thirdLevelData);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);
 });

 it('3rd level: sets the selectedItem to this node', function() {
 expect(scope.selectedItem).toEqual(scope.parentNodes[1].children[0]);
 });

 it('3rd level: sets the level to 2', function() {
 expect(scope.level).toBe(2);
 });

 it('3rd level: calls getChildren once', function() {
 expect(scope.handlers.getChildren).toHaveBeenCalled();
 expect(scope.handlers.getChildren.callCount).toBe(1);
 });

 it('3rd level: sets the correct node in the second level', function() {
 expect(scope.parentNodes[2][scope.labelField]).toEqual('Wheels');
 });

 it('3rd level: adds the children', function() {
 expect(scope.parentNodes[2].children.length).toEqual(2);
 });

 it('3rd level: adds adds all the third level data', function() {
 expect(scope.parentNodes[2].children[0][scope.labelField]).toEqual('ThirdLevel');
 expect(scope.parentNodes[2].children[1][scope.labelField]).toEqual('ThirdLevelV2');
 });

 it('3rd level: sets the parent', function() {
 expect(scope.parentNodes[2].parent).toEqual(scope.parentNodes[1]);
 });

 it('3rd level: sets the headers', function() {
 expect(scope.parentNodes[2].header).toEqual('level3');
 });

 it('two breadcrumbs displayed so does not show the ellipsis', function() {
 expect(scope.isEllipsisShown()).toBe(false);
 });

 it('will display the first, second, third level children', function() {
 expect(scope.displayNodes.length).toBe(3);
 expect(scope.displayNodes[0].children.length).toBe(3);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('Mustang');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('Sandy');
 expect(scope.displayNodes[0].children[2][scope.labelField]).toBe('Nothing');
 expect(scope.displayNodes[1].children.length).toBe(2);
 expect(scope.displayNodes[1].children[0][scope.labelField]).toBe('Wheels');
 expect(scope.displayNodes[1].children[1][scope.labelField]).toBe('Brakes');
 expect(scope.displayNodes[2].children.length).toBe(2);
 expect(scope.displayNodes[2].children[0][scope.labelField]).toBe('ThirdLevel');
 expect(scope.displayNodes[2].children[1][scope.labelField]).toBe('ThirdLevelV2');
 });

 it('will display the first 3 breadcrumbs', function() {
 expect(scope.isBreadcrumbVisible(1)).toBe(true);
 expect(scope.isBreadcrumbVisible(2)).toBe(true);
 expect(scope.isBreadcrumbVisible(3)).toBe(true);
 });

 it('will not be openable if handlers.isOpenable returns false', function() {
 expect(scope.isOpenable(scope.selectedItem)).toBe(false);
 });

 it('calls the handlers.itemOpenHandler with all the breadcrumbs before this', function() {
 scope.handlers.itemOpenHandler = function() {};
 spyOn(scope.handlers, 'itemOpenHandler');

 scope.onOpenClick();
 expect(scope.handlers.itemOpenHandler).toHaveBeenCalledWith(
 scope.selectedItem, ['','Sandy']);
 });

 describe('when a 3rd is clicked', function() {

 beforeEach(function () {
 scope.handlers.getChildren.isSpy = false; // clear the spy to restart it
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 scope.handlers.isOpenable = function() {
 return true;
 };

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onRowClick(scope.parentNodes[2].children[0]);
 defer.resolve(mockObjects.fourthLevelData);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);
 });

 it('4th level: sets the selectedItem to this node', function() {
 expect(scope.selectedItem).toEqual(scope.parentNodes[2].children[0]);
 });

 it('4th level: sets the correct node', function() {
 expect(scope.parentNodes[3][scope.labelField]).toEqual('ThirdLevel');
 });

 it('4th level: has no children', function() {
 expect(scope.parentNodes[3].children.length).toEqual(1);
 });

 it('4th level: adds adds all data', function() {
 expect(scope.parentNodes[3].children[0][scope.labelField]).toEqual('4thLevel');
 });

 it('4th level: sets the parent', function() {
 expect(scope.parentNodes[3].parent).toEqual(scope.parentNodes[2]);
 });

 it('4th level: sets the headers', function() {
 expect(scope.parentNodes[3].header).toEqual('level4');
 });

 it('three breadcrumbs (MAX) displayed, so does not show the ellipsis', function() {
 expect(scope.isEllipsisShown()).toBe(false);
 });

 it('will display the second, third, fourth level children', function() {
 expect(scope.displayNodes.length).toBe(3);
 expect(scope.displayNodes[0].children.length).toBe(2);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('Wheels');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('Brakes');
 expect(scope.displayNodes[1].children.length).toBe(2);
 expect(scope.displayNodes[1].children[0][scope.labelField]).toBe('ThirdLevel');
 expect(scope.displayNodes[1].children[1][scope.labelField]).toBe('ThirdLevelV2');
 expect(scope.displayNodes[2].children.length).toBe(1);
 expect(scope.displayNodes[2].children[0][scope.labelField]).toBe('4thLevel');
 });

 it('will display the first 4 breadcrumbs', function() {
 expect(scope.isBreadcrumbVisible(1)).toBe(true);
 expect(scope.isBreadcrumbVisible(2)).toBe(true);
 expect(scope.isBreadcrumbVisible(3)).toBe(true);
 expect(scope.isBreadcrumbVisible(4)).toBe(true);
 });

 it('will be openable if handlers.isOpenable returns true', function() {
 expect(scope.isOpenable(scope.selectedItem)).toBe(true);
 });

 describe('when a 4th is clicked', function() {

 beforeEach(function () {
 scope.handlers.getChildren.isSpy = false; // clear the spy to restart it
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 scope.handlers.isOpenable = function() {
 return true;
 };

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onRowClick(scope.parentNodes[3].children[0]);
 defer.resolve([]);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);
 });

 it('5 level: sets the selectedItem to this node', function() {
 expect(scope.selectedItem).toEqual(scope.parentNodes[3].children[0]);
 });

 it('5 level: sets the correct node in the second level', function() {
 expect(scope.parentNodes[4][scope.labelField]).toEqual('4thLevel');
 });

 it('5 level: has no children', function() {
 expect(scope.parentNodes[4].children.length).toEqual(0);
 });

 it('5 level: sets the parent', function() {
 expect(scope.parentNodes[4].parent).toEqual(scope.parentNodes[3]);
 });

 it('4 (too many) breadcrumbs to display... so show the ellipsis', function() {
 expect(scope.isEllipsisShown()).toBe(true);
 });

 it('5 level: sets the headers', function() {
 expect(scope.parentNodes[4].header).toEqual('level5');
 });

 it('5 level: will display the third, fourth, and an empty level children', function() {
 expect(scope.displayNodes.length).toBe(3);
 expect(scope.displayNodes[0].children.length).toBe(2);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('ThirdLevel');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('ThirdLevelV2');
 expect(scope.displayNodes[1].children.length).toBe(1);
 expect(scope.displayNodes[1].children[0][scope.labelField]).toBe('4thLevel');
 expect(scope.displayNodes[2].children.length).toBe(0);
 });

 it('will only display the last 4 breadcrumbs', function() {
 expect(scope.isBreadcrumbVisible(1)).toBe(false);
 expect(scope.isBreadcrumbVisible(2)).toBe(true);
 expect(scope.isBreadcrumbVisible(3)).toBe(true);
 expect(scope.isBreadcrumbVisible(4)).toBe(true);
 expect(scope.isBreadcrumbVisible(5)).toBe(true);
 });


 it('calls the handlers.itemOpenHandler with all the breadcrumbs leading up to this', function() {
 scope.handlers.itemOpenHandler = function() {};
 spyOn(scope.handlers, 'itemOpenHandler');

 scope.onOpenClick();
 expect(scope.handlers.itemOpenHandler).toHaveBeenCalledWith(
 scope.selectedItem, ['','Sandy','Wheels','ThirdLevel']);
 });

 describe('when click back in the tree to a different 3rd level element (ThirdLevelV2) and children are slow to resolve', function() {

 beforeEach(function () {
 scope.onRowClick(scope.parentNodes[2].children[1]);
 // don't resolve the promise (to simulate 'slow' resolving)
 });

 it('will clear the children, but NOT shift the entire displayed array back', function() {
 expect(scope.displayNodes.length).toBe(1);
 expect(scope.displayNodes[0].children.length).toBe(2);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('ThirdLevel');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('ThirdLevelV2');
 });

 it('will update the selectedItem/highlight', function() {
 expect(scope.selectedItem[scope.labelField]).toEqual('ThirdLevelV2');
 expect(scope.selectedItem.selected).toEqual(true);
 });
 });


 });


 describe('when click on the breadcrumb of the 2nd level (Wheels)', function() {

 beforeEach(function () {
 scope.handlers.getChildren.isSpy = false; // clear the spy to restart it
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onBreadCrumbClick(2);
 defer.resolve(mockObjects.thirdLevelData);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);
 });

 it('sets the selectedItem to this node', function() {
 expect(scope.selectedItem).toEqual(scope.parentNodes[2]);
 });

 it('sets the correct node in the second level', function() {
 expect(scope.parentNodes[2][scope.labelField]).toEqual('Wheels');
 });

 it('does make a call to getChildren once', function() {
 expect(scope.handlers.getChildren).toHaveBeenCalled();
 });

 it('has 2 children', function() {
 expect(scope.parentNodes[2].children.length).toEqual(2);
 expect(scope.parentNodes[2].children[0][scope.labelField]).toEqual('ThirdLevel');
 expect(scope.parentNodes[2].children[1][scope.labelField]).toEqual('ThirdLevelV2');
 });

 it('sets the parent', function() {
 expect(scope.parentNodes[2].parent).toEqual(scope.parentNodes[1]);
 });

 it('sets the headers', function() {
 expect(scope.parentNodes[2].header).toEqual('level3');
 });

 it('has space so does not show the ellipsis', function() {
 expect(scope.isEllipsisShown()).toBe(false);
 });

 it('will display the first, second, third level children', function() {
 expect(scope.displayNodes.length).toBe(3);
 expect(scope.displayNodes[0].children.length).toBe(3);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('Mustang');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('Sandy');
 expect(scope.displayNodes[0].children[2][scope.labelField]).toBe('Nothing');
 expect(scope.displayNodes[1].children.length).toBe(2);
 expect(scope.displayNodes[1].children[0][scope.labelField]).toBe('Wheels');
 expect(scope.displayNodes[1].children[1][scope.labelField]).toBe('Brakes');
 expect(scope.displayNodes[2].children.length).toBe(2);
 expect(scope.displayNodes[2].children[0][scope.labelField]).toEqual('ThirdLevel');
 expect(scope.displayNodes[2].children[1][scope.labelField]).toEqual('ThirdLevelV2');
 });

 });

 });

 describe('when click on a different 2nd level element (Brakes)', function() {

 beforeEach(function () {
 scope.handlers.getChildren.isSpy = false; // clear the spy to restart it
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onRowClick(scope.parentNodes[1].children[1]);
 defer.resolve(mockObjects.anotherSecondLevelData);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);
 });

 it('2ndv2 level: sets the selectedItem to this node', function() {
 expect(scope.selectedItem).toEqual(scope.parentNodes[2]);
 });

 it('2ndv2 level: sets the correct node in the second level', function() {
 expect(scope.parentNodes[2][scope.labelField]).toEqual('Brakes');
 });

 it('2ndv2 level: has 1 child', function() {
 expect(scope.parentNodes[2].children.length).toEqual(1);
 expect(scope.parentNodes[2].children[0][scope.labelField]).toEqual('Another3rdLevel');
 });

 it('has space so does not show the ellipsis', function() {
 expect(scope.isEllipsisShown()).toBe(false);
 });

 it('2ndv2 level: sets the parent', function() {
 expect(scope.parentNodes[2].parent).toEqual(scope.parentNodes[1]);
 });

 it('2ndv2 level: sets the headers', function() {
 expect(scope.parentNodes[2].header).toEqual('level3');
 });

 it('2ndv2 level: will display the first, second, third level children', function() {
 expect(scope.displayNodes.length).toBe(3);
 expect(scope.displayNodes[0].children.length).toBe(3);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('Mustang');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('Sandy');
 expect(scope.displayNodes[0].children[2][scope.labelField]).toBe('Nothing');
 expect(scope.displayNodes[1].children.length).toBe(2);
 expect(scope.displayNodes[1].children[0][scope.labelField]).toBe('Wheels');
 expect(scope.displayNodes[1].children[1][scope.labelField]).toBe('Brakes');
 expect(scope.displayNodes[2].children.length).toBe(1);
 expect(scope.displayNodes[2].children[0][scope.labelField]).toBe('Another3rdLevel');
 });

 });

 describe('when click back in the tree to a different 2nd level element (Brakes) and children are slow to resolve', function() {

 beforeEach(function () {
 scope.onRowClick(scope.parentNodes[1].children[1]);
 // don't resolve the promise (to simulate 'slow' resolving)
 });

 it('will clear the children of the new selected node so they dont linger', function() {
 expect(scope.displayNodes.length).toBe(2);
 expect(scope.displayNodes[0].children.length).toBe(3);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('Mustang');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('Sandy');
 expect(scope.displayNodes[0].children[2][scope.labelField]).toBe('Nothing');
 expect(scope.displayNodes[1].children.length).toBe(2);
 expect(scope.displayNodes[1].children[0][scope.labelField]).toBe('Wheels');
 expect(scope.displayNodes[1].children[1][scope.labelField]).toBe('Brakes');
 });

 it('will update the breadcrumbs', function() {
 expect(scope.parentNodes.length).toBe(3);
 expect(scope.getBreadcrumb(scope.parentNodes[0])).toEqual('');
 expect(scope.getBreadcrumb(scope.parentNodes[1])).toEqual('Sandy');
 expect(scope.getBreadcrumb(scope.parentNodes[2])).toEqual('Brakes');
 });

 it('will update the selectedItem/highlight', function() {
 expect(scope.selectedItem[scope.labelField]).toEqual('Brakes');
 expect(scope.selectedItem.selected).toEqual(true);
 });
 });

 describe('when click on a different 3rd level element (ThirdLevelV2)', function() {

 beforeEach(function () {
 scope.handlers.getChildren.isSpy = false; // clear the spy to restart it
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onRowClick(scope.parentNodes[2].children[1]);
 defer.resolve(mockObjects.anotherThirdLevelData);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);
 });

 it('3rdv2 level: sets the selectedItem to this node', function() {
 expect(scope.selectedItem).toEqual(scope.parentNodes[2].children[1]);
 });

 it('3rdv2 level: sets the correct node in the second level', function() {
 expect(scope.parentNodes[3][scope.labelField]).toEqual('ThirdLevelV2');
 });

 it('3rdv2 level: has 1 child', function() {
 expect(scope.parentNodes[3].children.length).toEqual(1);
 expect(scope.parentNodes[3].children[0][scope.labelField]).toEqual('4thLevelAnother');
 });

 it('3rdv2 level: sets the parent', function() {
 expect(scope.parentNodes[3].parent).toEqual(scope.parentNodes[2]);
 });

 it('3rdv2 level: sets the headers', function() {
 expect(scope.parentNodes[3].header).toEqual('level4');
 });

 it('3rdv2 level: will display the second, third, fourth level children', function() {
 expect(scope.displayNodes.length).toBe(3);
 expect(scope.displayNodes[0].children.length).toBe(2);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('Wheels');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('Brakes');
 expect(scope.displayNodes[1].children.length).toBe(2);
 expect(scope.displayNodes[1].children[0][scope.labelField]).toBe('ThirdLevel');
 expect(scope.displayNodes[1].children[1][scope.labelField]).toBe('ThirdLevelV2');
 expect(scope.displayNodes[2].children.length).toBe(1);
 expect(scope.displayNodes[2].children[0][scope.labelField]).toBe('4thLevelAnother');
 });

 });

 });

 });

 describe('when updateTreeData is updated repeatedly', function() {

 describe('same node clicked', function() {

 beforeEach(function () {

 spyOn(scope.handlers, 'getChildren').andCallThrough();

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onRowClick(scope.parentNodes[0].children[1]);
 defer.resolve(mockObjects.secondLevelData);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);

 runs(function() {
 spyOn(scope, 'setDisplayNodes').andCallThrough();
 scope.handlers.getChildren.isSpy = false; // clear the spy to restart it
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 scope.onRowClick(scope.parentNodes[1].children[0]);
 scope.onRowClick(scope.parentNodes[1].children[0]);
 scope.onRowClick(scope.parentNodes[1].children[0]);

 scope.updateTreeData(mockObjects.thirdLevelData);
 scope.updateTreeData(mockObjects.thirdLevelData);
 scope.updateTreeData(mockObjects.thirdLevelData);
 });
 });

 it('only updates the level to the next level', function() {
 expect(scope.level).toBe(2);
 });

 it('calls setDisplayNodes 3x, since 3 valid calls', function() {
 expect(scope.setDisplayNodes.calls.length).toBe(3);
 });
 });

 describe('when different node clicked', function() {

 beforeEach(function () {

 spyOn(scope.handlers, 'getChildren').andCallThrough();

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onRowClick(scope.parentNodes[0].children[1]);
 defer.resolve(mockObjects.secondLevelData);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);

 runs(function() {
 spyOn(scope, 'setDisplayNodes').andCallThrough();
 scope.handlers.getChildren.isSpy = false; // clear the spy to restart it
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 scope.onRowClick(scope.parentNodes[1].children[0]);
 scope.onRowClick(scope.parentNodes[0].children[0]);

 scope.updateTreeData(mockObjects.thirdLevelData);
 scope.updateTreeData(mockObjects.secondLevelData);
 });
 });

 it('only updates the level to the correct level', function() {
 expect(scope.level).toBe(1);
 });

 it('calls setDisplayNodes only 1x, since only 1 parent matches', function() {
 expect(scope.setDisplayNodes.calls.length).toBe(1);
 });
 });

 });

 describe('when the children are slow to resolve', function() {

 beforeEach(function () {
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 scope.onRowClick(scope.parentNodes[0].children[1]);
 // don't resolve the promise (to simulate 'slow' resolving)
 });

 it('will only have the first level children since it hasnt gotten the children yet', function() {
 expect(scope.displayNodes.length).toBe(1);
 expect(scope.displayNodes[0].children.length).toBe(3);
 expect(scope.displayNodes[0].children[0][scope.labelField]).toBe('Mustang');
 expect(scope.displayNodes[0].children[1][scope.labelField]).toBe('Sandy');
 expect(scope.displayNodes[0].children[2][scope.labelField]).toBe('Nothing');
 });

 it('will update the breadcrumbs', function() {
 expect(scope.parentNodes.length).toBe(2);
 expect(scope.getBreadcrumb(scope.parentNodes[0])).toEqual('');
 expect(scope.getBreadcrumb(scope.parentNodes[1])).toEqual('Sandy');
 });

 it('will update the selectedItem/highlight', function() {
 expect(scope.selectedItem[scope.labelField]).toEqual('Sandy');
 expect(scope.selectedItem.selected).toEqual(true);
 });
 });

 });

 describe('with alternate arguments', function() {
 var scope, rootScope, q, defer, pxAssetBrowser;

 var altTopLevelData = [{
 'label' : 'Mustang',
 'identifier' : '001-1',
 'nodeIdentifier' : '0:001-1',
 'hasChildren' : true,
 'entity' : true,
 'y': 'top',
 'x': 'parent'
 }, {
 'label' : 'Sandy',
 'identifier' : '001-2',
 'nodeIdentifier' : '0:001-2',
 'hasChildren' : true,
 'entity' : true,
 'y': 'top',
 'x': 'parent'
 }, {
 'label' : 'Nothing',
 'identifier' : '001-3',
 'nodeIdentifier' : '0:001-3',
 'hasChildren' : true,
 'entity' : true,
 'y': 'top',
 'x': 'parent'
 }];
 var altSecondLevelData = [{
 'label' : 'Wheels',
 'identifier' : '001-1-1',
 'nodeIdentifier' : '1:001-1-1',
 'hasChildren' : true,
 'entity' : true,
 'y': '2',
 'x': 'top'
 }, {
 'label' : 'Brakes',
 'identifier' : '001-1-2',
 'nodeIdentifier' : '1:001-1-2',
 'hasChildren' : true,
 'entity' : true,
 'y': '2',
 'x': 'top'
 }];

 beforeEach(module('demoModule'));
 beforeEach(inject(function ($log, $rootScope, $q) {
 scope = $rootScope.$new();
 rootScope = $rootScope;
 q = $q;
 scope.showBreadcrumbs = false;
 scope.showOpenButton = false;
 scope.labelField = 'label';
 scope.parentIdField = 'x';
 scope.idField = 'y';
 scope.handlers = {
 getChildren: function() {
 defer = q.defer();
 return defer.promise;
 }
 };
 scope.treeData = altTopLevelData;

 pxAssetBrowser = new PxAssetBrowser();
 pxAssetBrowser.setLogger($log);

 pxAssetBrowser.vLink(scope);
 scope.$digest();
 }));

 it('sets default treeDisplayLevels', function() {
 expect(scope.treeDisplayLevels).toBe(1);
 });

 it('sets showBreadcrumbs', function() {
 expect(scope.showBreadcrumbs).toBe(false);
 });

 it('sets showOpenButton', function() {
 expect(scope.showBreadcrumbs).toBe(false);
 });

 it('sets the first level node values', function () {
 expect(scope.parentNodes[0].children[0][scope.labelField]).toEqual('Mustang');
 expect(scope.parentNodes[0].children[1][scope.labelField]).toEqual('Sandy');
 expect(scope.parentNodes[0].children[2][scope.labelField]).toEqual('Nothing');
 expect(scope.parentNodes[0].children.length).toEqual(3);
 });

 it('sets an empty string to the first level header', function () {
 expect(scope.parentNodes[0].header).toEqual('');
 });

 describe('when a context is clicked', function () {

 beforeEach(function () {
 scope.handlers.itemClickHandler = function() {};
 spyOn(scope.handlers, 'itemClickHandler');
 spyOn(scope.handlers, 'getChildren').andCallThrough();

 var oldTreeData = scope.treeData;
 runs(function() {
 scope.onRowClick(scope.parentNodes[0].children[1]);
 defer.resolve(altSecondLevelData);
 rootScope.$apply();
 });
 waitsFor(function() {
 return scope.treeData !== oldTreeData;
 }, 500);
 });

 it('is not openable because showOpenButton is false', function() {
 expect(scope.isOpenable(scope.parentNodes[0].children[1])).toBe(false);
 });

 it('sets the correct node in the second level', function () {
 expect(scope.parentNodes[1][scope.labelField]).toEqual('Sandy');
 });

 it('adds adds all the third level data', function () {
 expect(scope.parentNodes[1].children[0][scope.labelField]).toEqual('Wheels');
 expect(scope.parentNodes[1].children[1][scope.labelField]).toEqual('Brakes');
 });

 it('sets the second level node headers to an empty string', function () {
 expect(scope.parentNodes[1].header).toEqual('');
 });

 it('calls the clickHandler if it is provided', function() {
 expect(scope.handlers.itemClickHandler).toHaveBeenCalledWith(scope.selectedItem);
 });

 });

 });

 describe('when there is no getChildren method', function() {

 describe('then', function() {

 var scope, pxAssetBrowser;

 beforeEach(module('demoModule'));
 beforeEach(inject(function ($log, $rootScope) {
 scope = $rootScope.$new();
 scope.labelField = 'name';
 scope.parentIdField = 'category';
 scope.idField = 'entityType';
 scope.childKey = 'thiskey';
 scope.handlers = {};

 scope.treeData = [
 {
 'name': 'Mustang',
 'identifier': '001-1',
 'nodeIdentifier': '0:001-1',
 'hasChildren': true,
 'entity': true,
 'thiskey': [
 {
 'name':'Randy'
 }
 ]
 }
 ];

 pxAssetBrowser = new PxAssetBrowser();
 pxAssetBrowser.setLogger($log);

 pxAssetBrowser.vLink(scope);
 scope.$digest();
 }));

 it('uses the childKey', function () {

 scope.onRowClick(scope.parentNodes[0].children[0]);
 scope.$apply();

 expect(scope.parentNodes[1].children[0][scope.labelField]).toEqual('Randy');
 });

 });

 describe('or childKey', function() {

 var scope, pxAssetBrowser;

 beforeEach(module('demoModule'));
 beforeEach(inject(function ($log, $rootScope) {
 scope = $rootScope.$new();
 scope.labelField = 'name';
 scope.handlers = {};

 scope.treeData = [
 {
 'name': 'Mustang',
 'identifier': '001-1',
 'nodeIdentifier': '0:001-1',
 'hasChildren': true,
 'entity': true,
 'subcontexts': [
 {
 'name':'Melody'
 }
 ]
 }
 ];
 pxAssetBrowser = new PxAssetBrowser();
 pxAssetBrowser.setLogger($log);

 pxAssetBrowser.vLink(scope);
 scope.$digest();
 }));

 it('uses the subcontexts', function () {

 scope.onRowClick(scope.parentNodes[0].children[0]);
 scope.$apply();

 expect(scope.parentNodes[1].children[0][scope.labelField]).toEqual('Melody');
 });

 });

 describe('or childKey or subcontext', function() {

 var scope, pxAssetBrowser;

 beforeEach(module('demoModule'));
 beforeEach(inject(function ($log, $rootScope) {
 scope = $rootScope.$new();
 scope.labelField = 'name';
 scope.handlers = {};

 scope.treeData = [
 {
 'name': 'Mustang',
 'identifier': '001-1',
 'nodeIdentifier': '0:001-1',
 'hasChildren': true,
 'entity': true
 }
 ];
 pxAssetBrowser = new PxAssetBrowser();
 pxAssetBrowser.setLogger($log);

 pxAssetBrowser.vLink(scope);
 scope.$digest();
 }));

 it('does not push another level on the tree', function () {
 spyOn(scope.parentNodes, 'push');
 scope.onRowClick(scope.parentNodes[0].children[0]);
 scope.$apply();

 expect(scope.parentNodes.push).not.toHaveBeenCalled();
 });

 });

 describe('if it has no handlers object', function() {

 var scope, pxAssetBrowser;

 beforeEach(module('demoModule'));
 beforeEach(inject(function ($log, $rootScope) {
 scope = $rootScope.$new();
 scope.labelField = 'name';

 scope.treeData = [
 {
 'name': 'Mustang',
 'identifier': '001-1',
 'nodeIdentifier': '0:001-1',
 'hasChildren': true,
 'entity': true,
 'subcontexts': [
 {
 'name':'Subcontext'
 }
 ]
 }
 ];
 pxAssetBrowser = new PxAssetBrowser();
 pxAssetBrowser.setLogger($log);

 pxAssetBrowser.vLink(scope);
 scope.$digest();
 }));

 it('still falls back the same way (uses subcontext in this case)', function () {

 scope.onRowClick(scope.parentNodes[0].children[0]);
 scope.$apply();

 expect(scope.parentNodes[1].children[0][scope.labelField]).toEqual('Subcontext');
 });

 it('defines an empy handlers object', function () {
 expect(scope.handlers).toEqual({});
 });
 });

 });

 });
 });

 */