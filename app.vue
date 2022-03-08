<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import "@/assets/css/tailwind.css";
const docEl = document.documentElement
const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
const recalc = function () {
  var clientWidth = docEl.clientWidth;
  if (!clientWidth) return;
  docEl.style.fontSize = 16 * (clientWidth / 1200) + 'px';
};
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);
recalc()
//JS监听浏览器文字大小代码
// (function (doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    // recalc = function () {
    //   var clientWidth = docEl.clientWidth;
    //   if (!clientWidth) return;
    //   docEl.style.fontSize = 16 * (clientWidth / 1200) + 'px';
    // };

//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
//   recalc()
// })(document, window);
</script>