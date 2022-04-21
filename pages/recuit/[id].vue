<template>
  <div>
    <img class="w-full block" src="@/assets/images/recuit.jpg" alt />
    <div class="mx-auto my-0 w-7/12 h-full">
      <div v-for="(item, index) in items" :key="index">
        <template v-if="parseInt($route.params.id) === item.id">
          <div class="relative h-48">
            <div
              class="absolute left-0 top-[-50px] w-full h-full bg-white rounded"
            >
              <div class="flex justify-between p-10">
                <div class>
                  <div class="text-xl font-bold text-gray">
                    {{ item.title }}
                  </div>
                  <div class="flex text-gray-500">
                    {{ item.desc }}
                    <!-- <li>武汉 | 全职 | 大专</li> -->
                    <!-- <li>本科|</li>
                    <li>全职</li>-->
                  </div>
                  <div class="text-gray-500">
                    工作经验：{{ item.experience }}
                  </div>
                  <div class="text-gray-500">薪酬：{{ item.salary }}</div>
                </div>
                <div class="flex flex-col">
                  <button
                    class="w-28 h-8 bg-blue-400 text-white rounded mb-4 font-light hover:bg-blue-500"
                    type="button"
                  >
                    申请职位
                  </button>
                  <button
                    class="w-28 h-8 bg-white text-gray text-border rounded border-gray border font-light hover:border-blue-400 hover:text-blue-400"
                    type="button"
                  >
                    <NuxtLink to="/recuit">返回列表</NuxtLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded p-10 mb-12 mt-[-30px]">
            <div class="pb-12" v-if="item.duties">
              <div class="title">岗位职责</div>
              <div class="text-gray-500">
                <p v-for="(i, k) in item.duties" :key="k">
                  {{ k + 1 + '. ' + i }}
                </p>
              </div>
            </div>
            <div class="pb-12" v-if="item.requirements">
              <div class="title">任职要求</div>
              <div class="text-gray-500">
                <p v-for="(i, k) in item.requirements" :key="k">
                  {{ k + 1 + '. ' + i }}
                </p>
              </div>
            </div>
            <div class="pb-12" v-if="item.extra">
              <div class="title">加分项</div>
              <div class="text-gray-500">
                <p v-for="(i, k) in item.extra" :key="k">
                  {{ k + 1 + '. ' + i }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data';
export default {
  setup() {
    return {
      items: data,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  @apply text-xl mb-3 pl-2;
  border-left: 5px solid #0a82f1;
}
</style>
