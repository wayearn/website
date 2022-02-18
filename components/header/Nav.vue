<template>
  <div class="bg-custom py-3">
    <div class="mx-auto my-0 max-w-screen-lg">
      <NuxtLink class="px-4 text-lg text-white" to="/">首页</NuxtLink>
      <NuxtLink class="px-4 text-lg text-white" to="/products">解决方案</NuxtLink>
      <NuxtLink class="px-4 text-lg text-white" to="/recuit">招募英才</NuxtLink>
      <NuxtLink class="px-4 text-lg text-white" to="/about">关于我们</NuxtLink>
      <NuxtLink class="px-4 text-lg text-white" to="/partner">业务合作</NuxtLink>
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