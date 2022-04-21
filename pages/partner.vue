<template>
  <div>
    <div class="bg h-[25rem] w-screen"></div>
    <div class="w-7/12 my-0 mx-auto">
      <div class="text-3xl font-bold pt-8 pb-6">联系我们</div>
      <ul class="grid grid-cols-3 gap-3 pb-20">
        <li>
          <p class="text-xl font-bold pb-5">业务联系</p>
          <ul>
            <li>地址：武汉市洪山区樱花大厦A座1803</li>
            <li>邮箱：admin@wayearn.com</li>
            <li>电话：18571754815</li>
            <li>微信：toimc_brian</li>
          </ul>
        </li>
        <li>
          <p class="text-xl font-bold pb-5">社交</p>
          <ul>
            <li>公众号：toimc前端技术</li>
            <li>微信号：toimctech</li>
            <li>扫码关注：</li>
            <li><img src="@/assets/images/qrcode.jpg" alt="" /></li>
          </ul>
        </li>
        <li>
          <p class="text-xl font-bold pb-5">抖音</p>
          <ul>
            <li>抖音：toimc前端技术</li>
            <li>抖音号：toimc</li>
            <li>扫码关注：</li>
            <li><img src="@/assets/images/douyin.jpeg" alt="" /></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.bg {
  background: url('https://wayearn.obs.cn-east-2.myhuaweicloud.com/partner/bg-2x.jpg')
    no-repeat center center;
  background-size: cover;
}
</style>
