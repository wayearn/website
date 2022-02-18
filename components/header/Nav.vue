<template>
  <div class="bg-custom py-3">
    <div class="mx-auto my-0 max-w-screen-lg">
      <NuxtLink class="px-4 text-lg text-white" to="/">首页</NuxtLink>
      <NuxtLink class="px-4 text-lg text-white" to="/products">产品</NuxtLink>
      <NuxtLink class="px-4 text-lg text-white" to="/community">社区</NuxtLink>
      <NuxtLink class="px-4 text-lg text-white" to="/study">学习</NuxtLink>
      <NuxtLink class="px-4 text-lg text-white" to="/about">走近我们</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background: url("~/assets/images/banner/banner@2x.png") no-repeat center
    center fixed;
  background-size: cover;
}
</style>