<template>
  <div class="w-screen leading-tight">
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
          class="h-96 w-screen"
          :style="{
            background: 'url(' + item + ') no-repeat center center',
            'background-size': 'cover',
          }"
        ></div>
      </swiper-slide>
    </swiper>
    <div class="w-7/12 my-0 mx-auto">
      <div class="text-3xl font-bold pt-8 pb-6">关于我们</div>
      <div class="line-clamp-5 text-content pb-10">
        武汉为恩科技公司成立于2018年3月，主要业务为数据分析、软件定制开发、信息化建设咨询、系统集成等。公司前身为华中科技大学科研团队，长期从事数据分析的研究和软件开发工作，持续关注技术创新。技术负责人为高级项目管理师，具有深厚的项目管理经验，研发团队均具有10年以上IT系统研发经历，经验丰富。
      </div>
      <div class="text-2xl pt-8 pb-6">愿景和使命</div>
      <ul
        class="pb-6 bg1 relative text-white flex flex-col items-center justify-center"
      >
        <li class="text-3xl pb-12">技术因分享而更有价值。</li>
        <li class="text-2xl w-7/12">
          跟随数字时代，以扎实的技术，为客户提供优质的技术服务，以及打造更好的内容付费平台。
        </li>
      </ul>
      <div class="text-2xl pt-8 pb-6">我们的价值观</div>
      <div class="pb-6">
        <div class="bg2 relative text-white flex flex-col pl-14 pt-14">
          <div class="text-4xl pb-20">以奋进者为本</div>
          <ul
            class="flex flex-col items-start justify-center text-2xl list-disc pl-8 gap-y-4"
          >
            <li>"人才"作为为恩科技的核心资产，人才增值>财务增值</li>
            <li>对事和对人，坚持长期有耐心</li>
            <li>开拓，进取，以价值创造为导向，不让分配的天平失衡</li>
          </ul>
        </div>
      </div>
      <div class="pb-6">
        <div class="text-xl pb-4">以用户为中心</div>
        <ul>
          <li>筑好与用户沟通的桥梁，倾听用户反馈，深刻洞察用户需求</li>
          <li>以为用户创造价值为决策准绳</li>
          <li>将用户满意度作为评价自己工作的准则</li>
        </ul>
      </div>
      <div class="pb-6">
        <div class="text-xl pb-4">开拓进取</div>
        <ul>
          <li>不断提升自己，追求高效</li>
          <li>客观务实，追寻业务本质，尊重市场规律</li>
          <li>有契约精神，坚持优秀的职业操守</li>
        </ul>
      </div>
      <div class="pb-6">
        <div class="text-xl pb-4">危机意识</div>
        <ul>
          <li>坚持自我复盘，不拘泥于现状</li>
          <li>敢于创新，不惧失败</li>
          <li>方法远比困难多，勤思考，化腐朽为神奇</li>
        </ul>
      </div>
      <div class="pb-6">
        <div class="text-xl pb-4">诚信为本</div>
        <ul>
          <li>对一切不诚信行为说不</li>
          <li>敢于直面自己的问题，并积极解决</li>
          <li>言行一致，实事求是</li>
        </ul>
      </div>
      <div class="pb-6">
        <div class="text-xl pb-4">团队精神</div>
        <ul>
          <li>以共同目标出发，保持团队协作，充分信任队友</li>
          <li>有担当，遇事不推诿</li>
          <li>具备同理心，做好倾听者</li>
        </ul>
      </div>
      <div class="text-2xl pt-8 pb-6">我们的人才观</div>
      <div class="pb-6">
        <div class="text-xl pb-4">学习能力</div>
        <div>
          对未知的事物充满好奇，积极主动的学习新知识；具备自我学习能力，遇事主动思考，能根据工作需要，运用各种资源，快速成为某一领域专家。
        </div>
      </div>
      <div class="pb-6">
        <div class="text-xl pb-4">主人翁意识</div>
        <div>
          拒绝“各人自扫门前雪，莫管他人瓦上霜”，具备大局观；能从事物的本质出发，追求长期价值而非短期利益；主动承担责任，以正确的方式积极主动地去解决问题。
        </div>
      </div>
      <div class="pb-6">
        <div class="text-xl pb-4">逻辑思维</div>
        <div>
          实事求是，尊重客观事实；不唯心，不唯上，不随波逐流，敢于质疑权威，做正确的决策；勤于思考，用科学的方法来提升效率和竞争力。
        </div>
      </div>
      <div class="pb-6">
        <div class="text-xl pb-4">高标准、严要求</div>
        <div>
          追求精益求精，拒绝“差不多”；保持对自己的复盘，不安于现状，持续改进自己，追求卓越。
        </div>
      </div>
      <div class="text-3xl font-bold pt-8 pb-20">发展历程</div>
      <ul class="mb-12">
        <li>
          <div class="text-2xl font-bold flex">
            <div class="text-sky-400 mr-8">2022</div>
            <div>飞速发展</div>
          </div>
          <ul
            class="ml-10 pl-20 list-disc border-l-2 border-sky-200 pt-3 pb-10 text-content"
          >
            <li>
              优化知识付费服务，打造精品桌面端应用，让产品“更易用、更实用”
            </li>
            <li>扩展新媒体团队，优质内容持续发力</li>
            <li>规划人才培养计划，全面落地复合型人才培养方案</li>
          </ul>
        </li>
        <li>
          <div class="text-2xl font-bold flex">
            <div class="text-sky-400 mr-8">2021</div>
            <div>深耕优化</div>
          </div>
          <ul
            class="ml-10 pl-20 list-disc border-l-2 border-sky-200 pt-3 pb-10 text-content"
          >
            <li>高校企业深入合作，开发容器化应用平台</li>
            <li>数据分析领域发力，开发人工智能应用平台</li>
            <li>矩阵化运营沉淀，扁平化内部建设</li>
            <li>创作者服务平台、内容直播服务平台等多媒体技术积累</li>
          </ul>
        </li>
        <li>
          <div class="text-2xl font-bold flex">
            <div class="text-sky-400 mr-8">2020</div>
            <div>全面布局</div>
          </div>
          <ul
            class="ml-10 pl-20 list-disc border-l-2 border-sky-200 pt-3 pb-10 text-content"
          >
            <li>打造多条产品线，多端跨平台，多应用场景应用</li>
            <li>在团队初期打磨合作过程中，形成以奋斗者为本的价值观</li>
            <li>团队建设期，形成高效的调研、设计、研发、交付路径</li>
            <li>启动知识付费产品线规划，建设全面服务于开发者的服务平台</li>
          </ul>
        </li>
        <li>
          <div class="text-2xl font-bold flex">
            <div class="text-sky-400 mr-8">2019</div>
            <div>战略升级</div>
          </div>
          <ul
            class="ml-10 pl-20 list-disc border-l-2 border-sky-200 pt-3 pb-10 text-content"
          >
            <li>坚定不移的走“社区”为主，技术为辅的路线，为技术人服务</li>
            <li>扩展业务，往大数据库、人工智能方向进行探索</li>
            <li>
              创建新媒体团队，在知识付费领域发力，与北京奥鹏签订长期合作协议，成为合作伙伴
            </li>
            <li>对接高校，共同培育人才，建立人才观</li>
          </ul>
        </li>
        <li>
          <div class="text-2xl font-bold flex">
            <div class="text-sky-400 mr-8">2018</div>
            <div>梦想摇篮</div>
          </div>
          <ul class="ml-10 pl-20 list-disc pt-3 pb-10 text-content">
            <li>“为恩”2018年3月创立，“中华有为 感恩技术带来的福祉”</li>
            <li>创建技术社区，为技术人打造温暖的港湾</li>
            <li>开启调研，并挖掘技术创新方向</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { ref } from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = ref([
      'https://wayearn.static.toimc.com/about/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%B8%80.png',
      'https://wayearn.static.toimc.com/about/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%BA%8C.png',
      'https://wayearn.static.toimc.com/about/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%B8%89.png',
    ]);
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
        disableOnInteraction: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.bg1 {
  background: url('https://wayearn.static.toimc.com/about/%E6%84%BF%E6%99%AF%E5%92%8C%E4%BD%BF%E5%91%BD.png')
    no-repeat center center;
  background-size: contain;
  width: 100%;
  height: 31rem;
}
.bg2 {
  background: url('https://wayearn.static.toimc.com/about/%E4%BB%B7%E5%80%BC%E8%A7%82.png')
    no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 30rem;
}
</style>
