<template>
  <div>
    <div class="h-64 bg"></div>
    <div class="w-7/12 my-0 mx-auto">
      <div class="text-2xl text-center pt-12 pb-6">热招职位</div>
      <ul class="flex flex-wrap pb-20">
        <li class="item" v-for="(item, index) in items" :key="index">
          <NuxtLink :to="'/recuit/' + item.id" class="w-full">
            <div
              class="bg-white p-4 shadow-sm hover:shadow-md hover:bg-blue-100"
            >
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
.bg {
  background: url('https://wayearn.obs.cn-east-2.myhuaweicloud.com/recuit/%E4%B8%BA%E6%81%A9%E7%A7%91%E6%8A%801.gif')
    no-repeat center center;
  background-size: cover;
}

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
