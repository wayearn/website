<template>
  <div class="header border-b shadow-sm">
    <div
      class="mx-auto my-0 w-7/12 text-content flex items-center justify-between"
    >
      <div class="logo font-bold">为恩科技</div>
      <ul class="text-[16px] text-zinc-400 text-center relative flex">
        <li
          :class="['link-item', isActive(menu, $route.path) && 'active']"
          v-for="(menu, index) in menus"
          :key="index"
        >
          <NuxtLink
            class="inline-block w-[100px] hover:text-content"
            :to="menu.path"
            v-if="
              typeof menu.children === 'undefined' || menu.children.length === 0
            "
            >{{ menu.title }}</NuxtLink
          >
          <NuxtLink class="inline-block w-[100px] hover:text-content" v-else>
            <SubNav :menu="menu"></SubNav>
          </NuxtLink>
        </li>
        <li class="move border-b-2 border-radius w-[50px] absolute"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconPay from '~icons/ant-design/pay-circle-outlined';
import IconBussiness from '~icons/ant-design/area-chart-outlined';
import IconVideo from '~icons/ant-design/youtube-outlined';
import SubNav from './SubNav.vue';

export default {
  components: {
    IconPay,
    IconBussiness,
    IconVideo,
    SubNav,
  },
  setup() {
    // const timeline = gsap.timeline()

    const menus = [
      {
        title: '首页',
        path: '/',
      },
      {
        title: '解决方案',
        path: '/products',
        children: [
          {
            title: '知识付费',
            path: '/pknote',
          },
          {
            title: '营销平台',
            path: '/marketing',
          },
          // {
          //   title: '直播服务',
          //   path: '/living',
          // },
        ],
      },
      {
        title: '招募英才',
        path: '/recuit',
      },
      {
        title: '关于我们',
        path: '/about',
      },
      {
        title: '业务合作',
        path: '/partner',
      },
    ];

    const isActive = (item, path) => {
      let flag = false;
      // if (item.path && item.path.indexOf(path) !== -1) {
      if ((item.path && item.path === path) || path.indexOf(item.path) !== -1) {
        flag = true;
      }
      if (item.children && item.children.length > 0) {
        item.children.forEach((i) => {
          if (isActive(i, path)) {
            flag = true;
          }
        });
      }
      return flag;
    };

    return {
      menus,
      isActive,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  line-height: 60px;
  .menu {
    background: white;
    white-space: nowrap;
    z-index: 9999;
    display: none;
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
}

.logo {
  font-size: 40px;
}

$spacers: (
  1: 25px,
  2: 125px,
  3: 225px,
  4: 325px,
  5: 425px,
) !default;

.move {
  transition: left 0.2s ease-in-out 0s;
  top: 45px;
  left: 25px;
  z-index: -1;
}

@each $key, $value in $spacers {
  .link-item:nth-child(#{$key}) {
    &:hover {
      ~ .move {
        left: $value !important;
      }
    }
    &.active {
      ~ .move {
        left: $value;
      }
    }
  }
}

.router-link-active {
  @apply text-content;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
