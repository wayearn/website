<template>
  <div class="min-h-full flex flex-col">
    <HeaderNav />
    <div class="flex-1 bg-[#fafdff]">
      <slot></slot>
    </div>
    <FooterDefault />
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      meta: [
        // { name: 'viewport', content: 'width=device-width,initial-scale=0,maximum-scale=0, user-scalable=yes, shrink-to-fit=no' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'renderer', content: 'webkit' },
        { name: 'format-detection', content: 'telephone=no' },
      ]
    }
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>