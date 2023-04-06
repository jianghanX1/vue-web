<template>
  <div class="bottom-list">
    <div class="item" v-for="(item,index) in arr" :key="index" @click="classClick"><img :src="img6" alt=""></div>
  </div>
</template>

<script>
import img6 from '@/assets/06.webp'
export default {
  name: "BottomList",
  data() {
    return {
      img6,
      arr: [1,1,1,1,1,1]
    }
  },
  methods: {
    classClick() {
      this.$router.push({
        path: '/mobileClassify'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-list{
  margin-top: 0.875rem;
  padding: 0 0.625rem;
  .item{
    width: 9.0625rem;
    height: 4.6875rem;
    border-radius: 0.1875rem;
    margin-bottom: 0.375rem;
    float: left;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    border: 2px solid #fff;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .item:nth-of-type(2n-1){
    margin-right: 0.624rem;
  }
}
.bottom-list:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
