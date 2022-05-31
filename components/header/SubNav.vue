<template>
  <div ref="hoverElem">
    <div>{{ menu.title }}</div>
    <transition name="fade">
      <ul class="absolute menu" v-show="isHovered">
        <li
          v-for="(item, idx) in menu.children"
          :key="idx"
          :class="$route.path.indexOf(item.path) !== -1 && 'active'"
        >
          <NuxtLink :to="item.path" class="flex items-center">
            <!-- <Icon icon="ant-design:pay-circle-outlined" /> -->
            <span class="text-zinc-400 hover:text-content">{{
              item.title
            }}</span>
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useElementHover } from '@vueuse/core';
import { ref } from 'vue';
// import { Icon } from '@iconify/vue';

export default defineComponent({
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  // components: {
  //   Icon,
  // },
  setup() {
    const hoverElem = ref(null);
    const isHovered = useElementHover(hoverElem);
    return {
      hoverElem,
      isHovered,
    };
  },
});
</script>

<style scoped lang="scss">
.menu {
  background: white;
  white-space: nowrap;
  z-index: 9999;
  li {
    line-height: 45px !important;
    @apply px-4 flex flex-nowrap;
    &:hover {
      @apply bg-blue-50;
    }
    a {
      width: 100%;
    }
  }
}
</style>
