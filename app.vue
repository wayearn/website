<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
// import './node_modules/@purge-icons/generated'
//JS监听浏览器文字大小代码
import '@/assets/css/tailwind.css';
if (process.client) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const docEl = document.documentElement;
    const resizeEvt =
      'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 14 * (clientWidth / 1400) + 'px';
    };
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
