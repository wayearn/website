<template>
  <div class="p-5">
    <div class="block text-white text-sm pb-3 font-bold">相关站点</div>
    <ul class="text-sky-400 text-xs">
      <li>
        <NuxtLink to="/products">解决方案</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/recuit">招募英才</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/partner">业务合作</NuxtLink>
      </li>
    </ul>
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
</style>