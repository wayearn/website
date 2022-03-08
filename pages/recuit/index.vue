<template>
  <div class="bg-[#fafdff]">
    <div class="w-9/12 my-0 mx-auto">
      <div class="text-2xl text-center pt-12 pb-6">热招职位</div>
      <ul class="flex flex-wrap pb-20">
        <li class="item" v-for="(item, index) in items" :key="index">
          <NuxtLink :to="'/recuit/' + item.id">
            <div class="bg-white p-4 shadow-sm hover:shadow-md hover:bg-blue-100">
              <p class="text-[18px] text-gray">{{ item.title }}</p>
              <p class="desc">{{ item.desc }}</p>
              <p class="desc">工作经验：{{ item.experience }}</p>
              <p class="desc">薪酬：{{ item.salary }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { unref } from 'vue'
export default {
  setup () {
    const items = unref([
      {
        id: 1,
        title: '前端工程师',
        desc: '武汉 | 全职 | 大专',
        experience: '1-3年',
        salary: '3-7k'
      },
      {
        id: 2,
        title: '全栈工程师',
        desc: '武汉 | 全职 | 本科',
        experience: '3-5年',
        salary: '8-15k'
      },
      {
        id: 3,
        title: '产品经理',
        desc: '武汉 | 全职 | 大专',
        experience: '3-5年',
        salary: '7-12k'
      },
      {
        id: 4,
        title: 'UI设计',
        desc: '武汉 | 全职 | 大专',
        experience: '1-3年',
        salary: '3-5k'
      },
      {
        id: 5,
        title: 'UI设计',
        desc: '武汉 | 兼职 | 大专',
        experience: '1-3年',
        salary: '1-3k'
      },
      {
        id: 6,
        title: '新媒体运营',
        desc: '武汉 | 兼职 | 大专',
        experience: '1-3年',
        salary: '1-3k'
      },
    ])

    return {
      items
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  @apply w-1/2 p-4 pb-8 cursor-pointer;
  p {
    @apply pb-1;
  }
}

.desc {
  @apply text-gray-500 text-[14px];
}
</style>