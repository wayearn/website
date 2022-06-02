<template>
  <div>
    <!-- <h1 class="text-3xl font-bold underline">Hello world! {{ store.name }}</h1>
    <button @click="toggle(!show)">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition> -->
    <div class="bg h-[40rem] text-white flex flex-col justify-center">
      <div class="w-7/12 my-0 mx-auto">
        <div class="text-3xl font-bold pb-4">传播技术的种子</div>
        <div class="text-xl">让技术没有门槛，让沟通没有障碍</div>
        <NuxtLink to="/pknote">
          <div class="inline-flex items-center mt-10 bg-gray-800 text-white p-4 rounded cursor-pointer">
            了解我们的产品
            <icon icon="bi:arrow-right" class="ml-2" size="24" color="#fff" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="w-7/12 my-0 mx-auto">
      <div class="py-4">
        <div class="text-2xl">“</div>
        <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            多年来，为恩科技不忘初心，以建立行业服务标杆为目标，不断提升技术设计服务水平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身价值！
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px]  bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
      <ul class="grid grid-cols-3 gap-3">
        <li v-for="(item, index) in products" :key="item.link" class="p-10 product cursor-pointer hover:bg-[#26AAD6]"
          @mouseover="setHover(index)" @mouseleave="setHover()" @click="jumpTo(item)">
          <icon :icon="item.icon" :height="50"></icon>
          <div class="text-xl py-3">{{ item.name }}</div>
          <div class="text-sm desc">{{ item.desc }}</div>
          <icon icon="bi:arrow-right" class="mt-5" height="24" :color="current === index ? '#fff' : '#333'" />
        </li>
      </ul>
      <div class="h-[1px] w-full bg-gray-500 my-10"></div>
    </div>
    <div class="w-7/12 my-0 mx-auto">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">技术项目输出</div>
        <div class="text-sm text-gray-400 w-2/3 pb-10">
          让每一个人都成为技术分享达人
        </div>
        <ul class="grid grid-cols-3 gap-5">
          <li v-for="item in projects" :key="item" class="flex flex-col h-72 hover:shadow">
            <div class="h-3/4 overflow-hidden">
              <div class="h-full w-full bg-no-repeat bg-cover bg-top" :style="{
                'background-image': `url('${item.image}')`
              }"></div>
            </div>
            <div class="p-4">
              <div class="text-lg">{{ item.name }}</div>
              <div class="pt-4 text-sm text-gray-500">{{ item.desc }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-7/12 my-0 mx-auto">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">合作伙伴</div>
        <div class="text-sm text-gray-400 w-2/3">
          他们都选择了为恩科技，我们的使命就是让他们的选择变得坚定和正确
          为客户创造更大的价值从而实现自己的价值
        </div>
        <swiper :modules="modules" :slides-per-view="4" :freeMode="true" :space-between="50"
          :pagination="{ clickable: true }" loop>
          <swiper-slide v-for="(item, index) in partners" :key="index" class="py-6">
            <div class="px-2 h-36 w-full bg-gray-100">
              <!-- <img :src="item" width="100%" alt /> -->
              <div class="h-full w-full bg-no-repeat bg-contain bg-center" :style="{
                'background-image': `url('${item}')`
              }"></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="w-7/12 my-0 mx-auto">
      <div class="py-4">
        <div class="grid grid-cols-2 gap-2">
          <div class="grid grid-cols-2 gap-2">
            <img class="rounded" v-for="item in teams" :key="item" :src="item" alt="">
          </div>
          <div class="pl-20">
            <div class="text-2xl font-bold pb-4">公司团队</div>
            <div class="text-sm text-gray-400">
              他们都选择了为恩科技，我们的使命就是让他们的选择变得坚定和正确为客户创造更大的价值从而实现自己的价值我们的目标就是去让知识造福所有的程序员，让程序员入门不难，也能持续的成长。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useStore } from '@/store';
// import { useToggle } from '@vueuse/shared';
import { Icon } from '@iconify/vue';
import { Pagination, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/free-mode";


export default {
  components: {
    Icon,
    Swiper,
    SwiperSlide,
  },
  setup () {

    // const router = useRouter()

    const products = ref([
      {
        icon: 'ri:community-line',
        name: 'toimc社区',
        desc: '共建纯粹的技术交流社区',
        link: 'http://front.dev.toimc.com:22500/'
      },
      {
        icon: 'ph:books-light',
        name: 'toimc管理后台项目',
        desc: '内容安全、权限管理',
        link: 'http://admin.dev.toimc.com:22501/'
      },
      {
        icon: 'ci:share-outline',
        name: 'toimc开源团队',
        desc: '传承开源精神，推动开源事业',
        link: 'https://github.com/toimc-team'
      },
    ])

    const teams = ref([
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/team/1.jpg',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/team/2.jpg',
    ])

    const partners = ref([
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/partner/logo1.png',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/partner/logo2.png',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/partner/logo8.png',
      // 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/partner/logo4.png',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/partner/logo5.png',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/partner/logo6.png',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/partner/logo7.png',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/partner/logo3.png',
    ])

    // 核心部分悬浮控制
    const current = ref()

    const setHover = (index) => {
      current.value = index
    }

    const jumpTo = (item) => {
      window.open(item.link)
    }

    // const [show, toggle] = useToggle(false);
    const projects = ref([
      {
        name: '课程助手',
        desc: '提供视频、笔记、答疑、资源等功能',
        image: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/home/%E8%AF%BE%E7%A8%8B%E5%8A%A9%E6%89%8B.jpg'
      },
      {
        name: '学院App',
        desc: '使用Flutter开发的学院App',
        image: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/home/%E5%AD%A6%E9%99%A2App.jpg'
      },
      {
        name: '直播软件',
        desc: '基于Electron的跨端跨平台的直播软件',
        image: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/home/%E7%9B%B4%E6%92%AD%E8%BD%AF%E4%BB%B6.jpg'
      },
      {
        name: '数据分析平台',
        desc: '智能分析、智能画像和智能运营',
        image: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/home/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E5%B9%B3%E5%8F%B0.jpg'
      },
      {
        name: '数据采集与分析平台',
        desc: '基于大数据的采集、处理、分析平台',
        image: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/home/%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E4%B8%8E%E5%88%86%E6%9E%90%E5%B9%B3%E5%8F%B0.jpg'
      },
      {
        name: '内容安全平台',
        desc: '对多媒体等进行检测与审核',
        image: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/home/%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8.jpg'
      },
      {
        name: '课程营销平台',
        desc: '教师可以使用它来制作和销售在线课程',
        image: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/home/%E8%90%A5%E9%94%80%E5%B9%B3%E5%8F%B0.jpg'
      },
      {
        name: '综合业务系统',
        desc: '内部项目的流转与流程控制',
        image: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/home/%E7%BB%BC%E5%90%88%E4%B8%9A%E5%8A%A1%E7%B3%BB%E7%BB%9F.jpg'
      },
      {
        name: '创作者服务平台',
        desc: '提供授权、内容、互动及数据管理服务',
        image: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/home/%E5%88%9B%E4%BD%9C%E8%80%85%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0.jpg'
      },
    ])

    return {
      products,
      setHover,
      current,
      jumpTo,
      teams,
      partners,
      modules: [Pagination, FreeMode],
      projects,
      // store: useStore(),
      // show,
      // toggle,
    };
  },
};
</script>

<style scoped lang="scss">
:deep(.swiper-pagination) {
  @apply relative;
}

.bg {
  background: url('https://wayearn.obs.cn-east-2.myhuaweicloud.com/home/banner%402x.png') no-repeat top center;
  background-size: cover;
}

.product {
  .desc {
    @apply text-gray-500;
  }

  &:hover {
    @apply text-white;

    .desc {
      @apply text-white;
    }
  }
}
</style>
