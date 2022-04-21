<template>
  <div>
    <div class="bg h-96 w-screen"></div>
    <div class="w-7/12 my-0 mx-auto">
      <div class="text-2xl pt-12 pb-6">TOIMC能力开放平台：TOIMC全业务赋能平台</div>
      <div
        class="line-clamp-5 text-content pb-10"
      >TOIMC能力开放平台是TOIMC全业务生态决策的中心，通过云计算、大数据、物联网、人工智能、移动互联网技术，为生态中各个业务参与者赋能。TOIMC这一能力面向TOIMC生态的合作伙伴开放，赋能生态伙伴的运营的标准化、智能化、数字化。</div>
      <ul class="flex justify-around pb-4">
        <li
          :class="['flex flex-col items-center', licls]"
          v-for="(item, index) in items"
          :key="index"
        >
          <img class="h-3/5 pb-5" :src="item.url" alt />
          <div class="text-content">{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <div class="bg1 h-96 w-screen">
      <div class="w-7/12 my-0 mx-auto text-white">
        <div class="text-2xl pt-12 pb-6">内容直播服务</div>
        <div
          class="pb-10 w-1/2 text-xs leading-tight"
        >TOIMC内容直播服务可为用户提供内容直播能力，服务易接入、高可用，只需简单几步就可以快速接入直播能力。通过使用横向扩展大规模并行处理 (MPP) 体系结构将数据仓库的数据扩展到千万亿字节级别,并且能够与 Hadoop 等非关系型数据源集成。为用户提供清晰流畅的音视频直播服务。</div>
      </div>
    </div>
    <div class="w-7/12 my-0 mx-auto">
      <div class="text-2xl pt-12 pb-6">全渠道营销平台</div>
      <div
        class="line-clamp-5 text-content pb-10"
      >TOIMC能力开放平台是TOIMC全业务生态决策的中心，通过云计算、大数据、物联网、人工智能、移动互联网技术，为生态中各个业务参与者赋能。TOIMC这一能力面向TOIMC生态的合作伙伴开放，赋能生态伙伴的运营的标准化、智能化、数字化。</div>
      <ul class="flex pb-4 text-content space-x-8">
        <li
          :class="['flex flex-col items-start ', picscls]"
          v-for="(item, index) in pics"
          :key="index"
        >
          <img class="h-4/5 pb-3 self-center" :src="item.url" alt />
          <div class="text-lg pb-3 font-bold">{{ item.title }}</div>
          <div class="text-xs leading-tight">{{ item.desc }}</div>
        </li>
      </ul>
    </div>
    <div class="w-7/12 my-0 mx-auto">
      <div class="text-2xl pt-12 pb-8">内容审核开放能力</div>
      <ul class="flex justify-around pb-4 text-content space-x-8">
        <li
          :class="['flex flex-col items-center', tagscls]"
          v-for="(item, index) in tags"
          :key="index"
        >
          <img class="h-2/5 pb-3 self-center" :src="item.url" alt />
          <div class="text-lg pb-3 font-bold">{{ item.title }}</div>
          <div class="text-xs leading-tight">{{ item.desc }}</div>
        </li>
      </ul>
    </div>
    <div class="bg2 h-96 w-screen mb-10">
      <div class="w-7/12 my-0 mx-auto text-white">
        <div class="text-2xl pt-12 pb-6">大数据采集分析能力</div>
        <div
          class="pb-10 w-1/2 text-xs leading-tight"
        >打司机开采集及分析能力具有系统完善，操作便捷等特点，提供了数据采集、数据流转、行政管理等功能，实现了数据采集工作的智慧化化和数字化管理。可以对数据进行各种采样、清洗、分析，提供多种数据展现形式帮助用户直观的对数据进行查看，提供了处理参数修改等功能，可以对数据等多方面进行调节，提高办事效率和服务水平。</div>
      </div>
    </div>
    <div class="w-7/12 my-0 mx-auto flex space-x-12">
      <div class="bg3 h-96 w-1/2"></div>
      <div class="px-16">
        <div class="text-2xl pt-12 pb-6">TOIMC智能助手</div>
        <div
          class="pb-10 pr-18 text-xs leading-tight"
        >TOIMC智能助手可帮助用户进行学习管理，科学规划学习计划，提供智能提醒服务。同时运用先进的跨平台技术，使得软件有较强的兼容性，可以让它在多平台、多设备上运行。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    const items = ref([
      {
        name: '云计算',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E4%BA%91%E8%AE%A1%E7%AE%97.png'
      },
      {
        name: '大数据',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E5%A4%A7%E6%95%B0%E6%8D%AE.png'
      },
      {
        name: '物联网',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E7%89%A9%E8%81%94%E7%BD%91.png'
      },
      {
        name: '人工智能',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.png'
      },
      {
        name: '移动互联网',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E7%A7%BB%E5%8A%A8%E4%BA%92%E8%81%94%E7%BD%91.png'
      },
    ])

    const pics = ref([
      {
        title: '标准化',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E6%A0%87%E5%87%86%E5%8C%96.png',
        desc: '通过标准化营销业务流程，帮助企业整合客户数据资产、洞察客户行为、实现千人千面的营销。'
      },
      {
        title: '全流程',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E5%85%A8%E6%B5%81%E7%A8%8B.png',
        desc: '方便集成各家数字营销系统，将企业的内部数据打通，实现营销业务全流程管理，帮助企业获客。'
      },
      {
        title: '多维度',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E5%A4%9A%E7%BB%B4%E5%BA%A6.png',
        desc: '根据标签筛选客户,设置不同类型标签,分组进行客户管理,分层筛选,一键跟进，提升企业营销效率。'
      },
    ])

    const tags = ref([
      {
        title: '准确率高',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E8%AF%86%E5%88%AB%E5%87%86%E7%A1%AE.png',
        desc: '深度多种融合，实时监测舆情趋势，识别精准高效。'
      },
      {
        title: '节约成本',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E8%8A%82%E7%BA%A6.png',
        desc: '帮助您节约 80% 以上的人工审核成本。'
      },
      {
        title: '接入方便',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/API%E6%8E%A5%E5%85%A5.png',
        desc: '服务使用简单快捷，兼容性强，并提供全流程技术支持。'
      },
      {
        title: '贴合场景',
        url: 'https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E5%9C%BA%E6%99%AF%E7%AE%A1%E7%90%86.png',
        desc: '支持业务场景维度的配置，全方位识别各类违规内容，极大降低平台监管风险。'
      },
    ])
    return {
      items,
      licls: computed(() => {
        return 'w-1/' + items.value.length
      }),
      pics,
      picscls: computed(() => {
        return 'w-1/' + pics.value.length
      }),
      tags,
      tagscls: computed(() => {
        return 'w-1/' + tags.value.length
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background: url("https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E4%B8%BA%E6%81%A9%E7%A7%91%E6%8A%80-%E5%9B%BE1.png")
    no-repeat center center;
  background-size: cover;
}
.bg1 {
  background: url("https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E7%9B%B4%E6%92%AD%E6%9C%8D%E5%8A%A1.png")
    no-repeat center center;
  background-size: cover;
}
.bg2 {
  background: url("https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90.png")
    no-repeat center center;
  background-size: cover;
}
.bg3 {
  background: url("https://wayearn.obs.cn-east-2.myhuaweicloud.com/%E6%99%BA%E8%83%BD%E5%8A%A9%E6%89%8B.png")
    no-repeat top center;
  background-size: cover;
}
</style>