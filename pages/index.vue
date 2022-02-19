<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world! {{store.name}}
    </h1>
  </div>
</template>

<script>
import { useStore } from '@/store'
export default {
  setup () {
    

    return {
      store: useStore()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>