<template>
  <div class="text-center py-2">
    <p>Copyright © 2018-{{year}} 武汉为恩科技有限公司 版权所有</p>
    <p>鄂ICP备19018123号-2</p>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup () {
    const year = ref()
    year.value = new Date().getFullYear()

    return {
      year
    }
  }
}
</script>

<style lang="scss" scoped>
</style>