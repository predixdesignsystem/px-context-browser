v1.3.8
====================
* added style variables for theming

v1.3.7
====================
* updated the header so it's always vertically centered.

v1.3.6
====================
* Update dependencies

v1.3.3
====================
* Add some top to make sure expanded 'ruler' is correctly positioned.

v1.3.2
====================
* Revert position change introduced in v1.0.7. Was causing issues in seed app by pushing content down the page.

v1.3.1
====================
* Fix dropdown icon size. CSS shadow dom fixes and load order of sass partials.

v1.3.0
====================
* Grunt to gulp conversion and move to style modues.

v1.2.0
====================
* Add content tag to allow insertion of deck selector.

v1.1.0
====================
* migrate styles to style module

v1.0.10
====================
* fixed demo bugs

v1.0.9
====================
* brought the Q library back in for local dev.

v1.0.8
====================
* updated mega demo styles and bower px-demo-snippet to ^

v1.0.7
====================
* Chrome changed its behavior from version 51 to 52, and was causing the header to be hidden behind the absolutely positioned browser. I changed the positioning to relative. also switched the old font awesome to one that works in shadow dom.

v1.0.6
====================
* PR that changed how the breadcrumbs are rebuilt, allowing items with children not in the selected path
v1.0.5
====================
* removed the old demo vulcanize from the auto build script

v1.0.4
====================
* added image to readme, removed watch, added view on github

v1.0.3
====================
* updated gh-pages script to vulcanize demo

v1.0.2
====================
* Add import and config of px-iconography-design (again)
* Add import and config of px-typography-design (again)
* removed importQ.html from ignore

v1.0.1
====================
* added new demo

v1.0.0
====================
* Add import and config of px-iconography-design
* Add import and config of px-typography-design

v0.10.0
====================
* Upgrade to Polymer 1.5.0

v0.9.7
====================
* Merged PR which fixed lazy loading spinner bug

v0.9.5
====================
* removed unnecessary check on breadcrumbs

v0.9.5
====================
* added oss_notice to bower ignore

v0.9.4
====================
* added pull request test

v0.9.3
====================
* added auto github pages functionality

v0.9.2
====================
* fixed tests

v0.9.1
====================
* fixed the breadcrumbs so they adhere to specs

v0.9.0
====================
* Upgrade to Polymer 1.4.0

v0.8.6
====================
* cleaned up docs a bit, and cleaned up css class methods.

v0.8.5
====================
* Updated travis file

v0.8.4
====================
* Updated documentation for api only.

v0.8.3
====================
* updated the link for Github Issues

v0.8.2
====================
* changed line height for selected items to help differentiate them from non-selected items

v0.8.1
====================
* Updated License

v0.8.0
====================
* Removed the default reference to the item chevron, since the Predix asset team does not support that. the functionality is still there, but now, you have to pass an attribute (has-children) and set it to true to ensure the chevrons show up.
