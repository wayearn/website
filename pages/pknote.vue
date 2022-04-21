<template>
  <div class="w-full h-full">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      :autoplay="autoplay"
      loop
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in images" :key="index">
        <!-- <img class="w-screen" :src="item" alt /> -->
        <div
          class="h-[33rem] w-screen"
          :style="{ 'background': 'url(' + item + ') no-repeat center center', 'background-size': 'cover' }"
        ></div>
      </swiper-slide>
    </swiper>
    <div class="w-7/12 my-0 mx-auto">
      <div class="text-3xl font-bold pt-8 pb-6">业务规模</div>
      <div
        class="line-clamp-5 text-content pb-10"
      >TOIMC知识付费秉承“内容即产品”的理念，以优质的创作服务赋能每一位创作者，推动内容创作高效执行与独特的运营体系相结合。依托专业的内容创作指导服务，辅以自研的内容推荐系统、大数据分析平台实现精细化运营。</div>
      <ul class="flex justify-evenly">
        <li class="item">
          <div class="text-5xl text-blue-400 pb-4">
            10000
            <span class="text-xl">+</span>
          </div>
          <div>入驻创作者</div>
        </li>
        <li class="item">
          <div class="text-5xl text-blue-400 pb-4">
            10
            <span class="text-xl">w+</span>
          </div>
          <div>优质内容</div>
        </li>
        <li class="item">
          <div class="text-5xl text-blue-400 pb-4">
            20%
            <!-- <span class="text-xl">w+</span> -->
          </div>
          <div>效率提升</div>
        </li>
      </ul>
      <div class="text-3xl font-bold pt-20 pb-6">产品优势</div>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
        :autoplay="autoplay1"
        loop
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="custom"
      >
        <swiper-slide v-for="(item, index) in images1" :key="index">
          <!-- <img class="w-screen" :src="item" alt /> -->
          <div class="flex flex-col items-center justify-center relative">
            <div
              class="h-[33rem] w-screen"
              :style="{ 'background': 'url(' + item.img + ') no-repeat center center', 'background-size': 'contain' }"
            ></div>
            <div class="py-5 text-xl">{{ item.title }}</div>
            <ul class="absolute left-10 top-6 text-xl leading-10 text-white list-disc">
              <li v-for="(desc, idx) in item.desc" :key="idx">{{ desc }}</li>
            </ul>
          </div>
        </swiper-slide>
      </swiper>
      <div class="text-3xl font-bold pt-20 pb-6">产品介绍</div>
      <ul class="flex flex-wrap justify-between">
        <li
          v-for="(item, index) in products"
          :key="index"
          class="p-6 w-56 bg-[#f5f8fb] mb-3 flex flex-col justify-between"
        >
          <div class="pb-2">
            <div class="text-sm font-bold pb-4">{{ item.title }}</div>
            <div class="text-xs text-gray-500">{{ item.desc }}</div>
          </div>
          <div>
            <img class="w-full h-full" :src="item.pic" alt />
          </div>
        </li>
      </ul>
      <div class="text-3xl font-bold pt-20 pb-6">招募信息</div>
      <div class="bg h-96 flex flex-col items-center justify-center text-white">
        <div class="text-lg pb-20">知识付费选TOIMC</div>
        <div class="text-4xl pb-5">全球招募优秀的内容创作者</div>
        <div class="text-2xl pb-5">独立开发者/开源项目作者/自媒体</div>
        <NuxtLink to="/recuit">
          <div class="w-[180px] h-[45px] bg-yellow-500 rounded text-center leading-[45px]">立即报名</div>
        </NuxtLink>
      </div>
      <div class="text-3xl font-bold pt-20 pb-6">开发为王</div>
      <ul class="flex justify-evenly pb-6">
        <li class="item">
          <div class="text-5xl text-blue-400 pb-4">
            100
            <span class="text-xl">+</span>
          </div>
          <div>独立开发者/开源作者专版</div>
        </li>
        <li class="item">
          <div class="text-5xl text-blue-400 pb-4">
            10万
            <span class="text-xl">+</span>
          </div>
          <div>定制化服务</div>
        </li>
      </ul>
      <img
        class="w-full pb-6"
        src="https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E5%BC%80%E6%BA%90%E7%89%88%E6%9C%AC.gif"
        alt
      />
      <ul class="flex flex-wrap my-10">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="w-1/3 flex flex-col items-center p-20 icons"
        >
          <Icon :icon="item.icon" :style="{ 'font-size': '10rem' }" class="text-gray-500"></Icon>
          <span class="pt-4 text-xl">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue';
// Import Swiper Vue.js components
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    Icon
  },
  setup () {
    const images = ref([
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E8%BD%AE%E6%92%AD%E5%9B%BE1.jpg',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E8%BD%AE%E6%92%AD%E5%9B%BE2.jpg',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E8%BD%AE%E6%92%AD%E5%9B%BE3.jpg'
    ])

    const images1 = ref([
      {
        title: '专业内容创作指导服务', img: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BC%98%E5%8A%BF1.jpg', desc: [
          '精准的内容定位',
          '高效的内容创作流程',
          '快捷的内容创作工具',
        ]
      },
      {
        title: '高效的内容创作流程', img: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BC%98%E5%8A%BF2.jpg', desc: [
          '去中心化',
          '好内容匹配合适的读者',
          '精准推荐',
        ]
      },
      {
        title: '快捷的内容创作工具', img: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BC%98%E5%8A%BF3.jpg', desc: [
          '创作者激励',
          '标签化运营',
          '内容即产品',
          '开源支持',
        ]
      }
    ])

    const products = [
      {
        title: '内容变现形式全覆盖',
        desc: '图文、视频、直播、问答，灵活的变现形式',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BC%98%E5%8A%BF1.jpg'
      },
      {
        title: '用户服务更精细',
        desc: '学习全周期管理、打卡管理、用户分层管理',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BC%98%E5%8A%BF2.jpg'
      },
      {
        title: '微信营销',
        desc: '公域+私域，精细化运营微信私域流量',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D3.jpg'
      },
      {
        title: '自动化社群运营',
        desc: '社群机器人打通私域和教学过程，打卡分享更高效',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D4.jpg'
      },
      {
        title: '全渠道转化裂变',
        desc: '会员、拼团、优惠券等裂变工具快速上手',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D5.jpg'
      },
      {
        title: '独立开发者、开源作者支持',
        desc: '专属独立开发者、开源作者服务支持，宣传开源项目',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D6.jpg'
      },
      {
        title: '快速结算，保证创作者收益',
        desc: '为优质创作者打造全套合规的资金提现方案',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D7.jpg'
      },
      {
        title: '坚决保护创作者版权',
        desc: '独立研发的版权保护体系，技术+法律的手段维护创作者版权',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D8.jpg'
      },
    ]

    const items = [
      { title: '专属创作服务', icon: 'bi:headset' },
      { title: '项目宣传通道', icon: 'bi:layout-text-window-reverse' },
      { title: '数据化运营', icon: 'bi:clipboard-data' },
      { title: '精准流量池', icon: 'bi:archive' },
      { title: '一对一客服', icon: 'bi:chat-right-heart' },
    ]

    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay],
      images,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      autoplay1: {
        delay: 5000,
        disableOnInteraction: false
      },
      images1,
      products,
      items
    };
  }
})
</script>

<style lang="scss">
.bg {
  background: url("https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/pknote/%E6%8B%9B%E5%8B%9F.jpg")
    no-repeat center center;
  background-size: cover;
}

.item {
  @apply flex flex-col justify-center items-center;
}

.custom {
  .swiper-pagination-horizontal {
    bottom: 5rem;
  }
}

.icons {
  border-right: 0.01rem solid #e5e5e5;
  &:nth-of-type(-n + 3) {
    border-bottom: 0.01rem solid #e5e5e5;
  }
  &:nth-child(3n) {
    border-right: 0;
  }
}
</style>