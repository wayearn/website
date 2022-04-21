<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world! {{ store.name }}</h1>
    <button @click="toggle(!show)">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
import { useStore } from '@/store';
import { useToggle } from '@vueuse/shared';
export default {
  setup() {
    const [show, toggle] = useToggle(false);

    return {
      store: useStore(),
      show,
      toggle,
    };
  },
};
</script>

<style scoped></style>
