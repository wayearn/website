<template>
  <footer>
    <div class="footer-wrap w-7/12 my-0 mx-auto">
      <ul class="grid grid-cols-3">
        <FooterAbout />
        <FooterLinks />
        <FooterContacts />
      </ul>
      <FooterCopyRight />
    </div>
  </footer>
</template>

<script>
export default {
  setup () {


    return {}
  }
}
</script>

<style lang="scss" scoped>
footer {
  clear: both;
  font-size: 14px;
  background-color: #000;
  position: relative;
  z-index: 100;
  color: rgba(255, 255, 255, 0.65);
  box-shadow: 0 1000px 0 1000px #fff;
  .footer-wrap {
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }
}
</style>