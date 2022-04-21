<template>
  <div>
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
      >TOIMC营销平台集成微信营销、短信营销、邮件营销等相关管理功能于一体，轻松实现对每一个潜在的客户进行个性化营销，最大可能让人们对您的业务产生兴趣，并最终成为付费客户。</div>
      <ul class="flex justify-evenly">
        <li class="item">
          <div class="text-5xl text-blue-400 pb-4">
            20大类
            <span class="text-xl">+</span>
          </div>
          <div>涉及行业</div>
        </li>
        <li class="item">
          <div class="text-5xl text-blue-400 pb-4">
            90%
            <span class="text-xl">w+</span>
          </div>
          <div>营销信息到达率</div>
        </li>
        <li class="item">
          <div class="text-5xl text-blue-400 pb-4">
            1000+
            <!-- <span class="text-xl">w+</span> -->
          </div>
          <div>企业维度</div>
        </li>
      </ul>
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
      <div class="text-3xl font-bold pt-20 pb-6">招商信息</div>
      <div class="bg h-96 relative flex flex-col items-center justify-center text-white">
        <span class="absolute text-4xl">拥抱SaaS风口，TOIMC诚邀您一起开拓万亿级蓝海市场</span>
      </div>
      <div class="text-3xl font-bold pt-20 pb-6">项目与支持</div>
      <ul class="pb-20">
        <li v-for="(item, index) in supports" :key="index" class="flex justify-between py-4">
          <div class="w-1/2">
            <img :src="item.pic" alt />
          </div>
          <div class="w-1/2 pl-5 flex flex-col">
            <span class="text-2xl pb-4">{{ item.title }}</span>
            <span class="text-content">{{ item.desc }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
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
  },
  setup () {
    const images = ref([
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E8%BD%AE%E6%92%AD%E5%9B%BE1.jpg',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E8%BD%AE%E6%92%AD%E5%9B%BE2.png',
      'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E8%BD%AE%E6%92%AD%E5%9B%BE3.png'
    ])

    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };

    const products = [
      {
        title: '企业大数据',
        desc: '权威海量企业数据，帮助ToB企业轻松获取销售线索',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D1.png'
      },
      {
        title: '营销自动化',
        desc: '独创营销自动化引擎，让电话、短信、邮件、微信实现自动化营销，帮助ToB企业输出有明确意向的有效线索，人力成本降低70%',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D2.png'
      },
      {
        title: 'CRM客户管理',
        desc: '一键式画像搜索引擎，轻松检索出优质企业线索，产出企业画像报告、综合画像指数，帮助您更精准定位想要的线索',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D3.png'
      },
      {
        title: '画像引擎',
        desc: '社群机器人打通私域和教学过程，打卡分享更高效',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D4.png'
      },
      {
        title: '智能推荐',
        desc: '基于企业客户的多维数据自主构建预测模型，从海量企业中预测优质销售线索',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D5.png'
      },
      {
        title: '微信营销',
        desc: '一站式管理微信公众号，实现微信自动化交互',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D6.png'
      },
      {
        title: '综合采集',
        desc: '精准采集目标客户信息，覆盖全网11大B2B平台,4大搜索引擎,7大地图,准确率达90%',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D7.png'
      },
      {
        title: 'AI电话',
        desc: '低成本高效率，代替人工完成海量销售工作',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D8.png'
      },
    ]


    const supports = [
      {
        title: '市场支持',
        desc: 'TOIMC为合作伙伴持续输出宣传页、展会、PPT、案例等销售物料。',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E6%8B%9B%E5%8B%9F1.png'
      },
      {
        title: '运营支持',
        desc: '专业运营团队为合作伙伴提供7*12小时的客户服务支持，做到快速响应。',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E6%8B%9B%E5%8B%9F2.png'
      },
      {
        title: '培训支持',
        desc: '专业运营团队为合作伙伴提供7*12小时的客户服务支持，做到快速响应。',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E6%8B%9B%E5%8B%9F3.png'
      },
      {
        title: '技术支持',
        desc: '技术团队为合作伙伴提供专业技术维护支持，保证产品的高可用性。',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E6%8B%9B%E5%8B%9F4.png'
      },
      {
        title: '链接资源',
        desc: '帮助优秀的合作伙伴链接资源、对接人脉，包括但不限于互联网资源、广告资源、行业研究及数据资源等。',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E6%8B%9B%E5%8B%9F5.png'
      },
      {
        title: '合作共赢',
        desc: '合作共赢政策，提供高额返点，优惠辅助合作伙伴更好的发展公司、拓展市场。',
        pic: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E6%8B%9B%E5%8B%9F6.png'
      },
    ]

    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay],
      images,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      products,
      supports
    }
  }
})
</script>

<style scoped lang="scss">
.item {
  @apply flex flex-col justify-center items-center;
}

.bg {
  background: url("https://wayearn.obs.cn-east-2.myhuaweicloud.com/projects/marketing/%E6%8B%9B%E5%8B%9F.png")
    no-repeat center center;
  background-size: cover;
}
</style>