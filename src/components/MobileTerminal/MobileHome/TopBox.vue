<template>
  <div class="top-box">
    <div class="item" @click="detailsClick"><img :src="img6" alt=""></div>
    <div class="item"><img :src="img7" alt=""></div>
    <div class="item"><img :src="img8" alt=""></div>
    <div class="item"><img :src="img9" alt=""></div>
    <div class="item"><img :src="img99" alt=""></div>
  </div>
</template>

<script>
import img6 from '@/assets/06.webp'
import img7 from '@/assets/07.webp'
import img8 from '@/assets/08.webp'
import img9 from '@/assets/09.webp'
import img99 from '@/assets/10.webp'
export default {
  name: "TopBox",
  data() {
    return {
      img6,
      img7,
      img8,
      img9,
      img99,
    }
  },
  methods: {
    detailsClick() {
      this.$router.push({
        path: '/mobileDetails'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.top-box{
  padding: 0 0.625rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 3.375rem;
  .item{
    box-sizing: border-box;
    width: 3.4375rem;
    height: 3.4375rem;
    border-radius: 0.375rem;
    overflow: hidden;
    border: 2px solid #fff;
    box-shadow: 0 0.125rem 0.375rem 0 rgb(0 0 0 / 60%);
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
