const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="px-context-browser-animations-styles">
<template>
<style>
@keyframes fadeInRight{from{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:none}}@keyframes fadeOutRight{from{opacity:1;transform:none}to{opacity:0;transform:translateX(100%)}}@keyframes fadeInLeft{from{opacity:0;transform:translateX(100%)}to{opacity:1;transform:none}}@keyframes fadeOutLeft{from{opacity:1;transform:none}to{opacity:0;transform:translateX(-100%)}}
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

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
;
