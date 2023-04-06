<template>
  <div class="big-box">
<!--    <div class="item"><img :src="img1" alt=""></div>-->
    <div class="item" @click="iconClick"><img :src="img2" alt=""></div>
    <div class="item"><img :src="img3" alt=""></div>
    <div class="item"><img :src="img4" alt=""></div>
    <div class="item"><img :src="img5" alt=""></div>
    <div class="item"><img :src="img6" alt=""></div>
    <div class="item"><img :src="img7" alt=""></div>
    <div class="item"><img :src="img8" alt=""></div>
    <div class="item"><img :src="img9" alt=""></div>
    <div class="item"><img :src="img99" alt=""></div>
  </div>
</template>

<script>
// import img1 from '@/assets/01.webp'
import img2 from '@/assets/02.webp'
import img3 from '@/assets/03.webp'
import img4 from '@/assets/04.webp'
import img5 from '@/assets/05.webp'
import img6 from '@/assets/06.webp'
import img7 from '@/assets/07.webp'
import img8 from '@/assets/08.webp'
import img9 from '@/assets/09.webp'
import img99 from '@/assets/10.webp'
export default {
  name: "Content",
  data() {
    return {
      // img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img99,
    }
  },
  methods: {
    iconClick() {
      this.$router.push({
        path: '/details',
        query: {



        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .big-box{
    width: 100%;
    padding: 10px 30px;
    box-sizing: border-box;
    @keyframes example {
      0%  {transform: scale(1);}
      35%  {transform: scale(1.2);}
      65% {transform: scale(1.1);}
      100% {transform: scale(1.3);}
    }
    .item:hover{
      cursor: pointer;
      animation-name: example;
      animation-duration: 0.6s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
    }

    .item{
      float: left;
      padding: 10px;
      box-sizing: border-box;
      img{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 2px solid #fff;
      }
    }
  }
  .big-box:after{
    content: ".";
    display: block;
    height: 0;
    clear: both;
  }
  @media screen and (min-width: 1201px){
    .item {
      width: 11%;
    }
  }
  @media screen and (min-width: 1081px) and (max-width: 1200px){
    .item {
      width: 12.5%;
    }
  }
  @media screen and (min-width: 961px) and (max-width: 1080px){
    .item {
      width: 14.2%;
    }
  }
  @media screen and (min-width: 841px) and (max-width: 960px){
    .item {
      width: 16.6%;
    }
  }
  @media screen and (min-width: 721px) and (max-width: 840px){
    .item {
      width: 20%;
    }
  }
  @media screen and (max-width: 720px){
    .item {
      width: 20%;
    }
  }
</style>
