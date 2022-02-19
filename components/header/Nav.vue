<template>
  <div class="py-3 border-b shadow-sm">
    <div class="mx-auto my-0 w-9/12 text-content flex items-center justify-between">
      <div class="text-3xl font-bold">为恩科技</div>
      <div class="text-lg text-zinc-400 text-center relative">
        <NuxtLink class="inline-block w-[100px] hover:text-content" to="/">首页</NuxtLink>
        <NuxtLink class="inline-block w-[100px] hover:text-content" to="/products">解决方案</NuxtLink>
        <NuxtLink class="inline-block w-[100px] hover:text-content" to="/recuit">招募英才</NuxtLink>
        <NuxtLink class="inline-block w-[100px] hover:text-content" to="/about">关于我们</NuxtLink>
        <NuxtLink class="inline-block w-[100px] hover:text-content" to="/partner">业务合作</NuxtLink>
        <div class="move border-b-2 border-radius w-[50px] absolute"></div>
      </div>
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
$spacers: (
  1: 25px,
  2: 125px,
  3: 225px,
  4: 325px,
  5: 425px,
) !default;
// .bg {
//   background: url("~/assets/images/banner/banner@2x.png") no-repeat center
//     center fixed;
//   background-size: cover;
// }
.move {
  transition: left 0.2s ease-in-out 0s;
  top: 35px;
  left: 25px;
}

@each $key, $value in $spacers {
  a:nth-child(#{$key}) {
    &:hover {
      ~ .move {
        left: $value !important;
      }
    }
    &.router-link-active {
      ~ .move {
        left: $value;
      }
    }
  }
}

.router-link-active {
  @apply text-content;
}
</style>