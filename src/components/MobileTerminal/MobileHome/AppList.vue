<template>
  <div>
    <div class="app-list" v-for="(item,index) in arr" :key="index">
      <div class="app-list-content">
        <div class="content-top">
          <div class="item" @click="detailsClick"><img :src="img6" alt=""></div>
          <div class="item"><img :src="img7" alt=""></div>
          <div class="item"><img :src="img8" alt=""></div>
        </div>
        <div class="content-middle" v-if="(index + 1) % 2 !== 0">
          <div class="middle-left">
            <div class="item"><img :src="img6" alt=""></div>
          </div>
          <div class="middle-right">
            <div class="item-box"><div class="item"><img :src="img7" alt=""></div></div>
            <div class="item-box"><div class="item"><img :src="img8" alt=""></div></div>
          </div>
          <div></div>
        </div>
        <div class="content-middle" v-if="(index + 1) % 2 === 0">
          <div class="middle-right">
            <div class="item-box"><div class="item"><img :src="img7" alt=""></div></div>
            <div class="item-box"><div class="item"><img :src="img8" alt=""></div></div>
          </div>
          <div class="middle-left2">
            <div class="item"><img :src="img6" alt=""></div>
          </div>
          <div></div>
        </div>
        <div class="content-top">
          <div class="item"><img :src="img6" alt=""></div>
          <div class="item"><img :src="img7" alt=""></div>
          <div class="item"><img :src="img8" alt=""></div>
        </div>
        <div class="content-bottom">
          <div class="item-box"><div class="item"><img :src="img7" alt=""></div></div>
          <div class="item-box"><div class="item"><img :src="img7" alt=""></div></div>
        </div>
      </div>
      <div class="adv" v-if="index === 0"><h6 class="adv-title">Advertisement</h6></div>
    </div>
  </div>
</template>

<script>
import img6 from '@/assets/06.webp'
import img7 from '@/assets/07.webp'
import img8 from '@/assets/08.webp'
export default {
  name: "AppList",
  data() {
    return {
      img6,
      img7,
      img8,
      arr: [1,1,1]
    }
  },
  mounted() {
    let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] // 原数组
    let newArr = [] // 新数组
    let num = Math.ceil(arr.length / 11)
    console.log(num);
    for ( let i = 1; i <= num; i++ ) {
      newArr[i - 1] = arr.splice(0,11)
    }
    console.log(newArr);
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
*{
  box-sizing: border-box;
}
.app-list{
  margin-top: 0.5625rem;
  .app-list-content{
    padding: 0 0.625rem;
    .content-top{
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .item{
        width: 5.875rem;
        height: 5.875rem;
        border-radius: 0.875rem;
        overflow: hidden;
        border: 2px solid #fff;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .item:not(:last-child){
        margin-right: 0.561rem;
      }
    }
    .content-middle{
      margin-top: 0.5625rem;
      margin-bottom: 0.5625rem;
      .middle-left{
        float: left;
        margin-right: 0.561rem;
        width: 12.3125rem;
        height: 12.3125rem;
        .item{
          width: 100%;
          height: 100%;
          border-radius: 0.875rem;
          overflow: hidden;
          border: 2px solid #fff;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .middle-left2{
        float: left;
        margin-left: 0.561rem;
        width: 12.3125rem;
        height: 12.3125rem;
        .item{
          width: 100%;
          height: 100%;
          border-radius: 0.875rem;
          overflow: hidden;
          border: 2px solid #fff;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .middle-right{
        float: left;
        .item-box{
          width: 5.875rem;
          height: 5.875rem;
          display: block;
          position: relative;
          background-color: #fff;
          box-shadow: 0 0.125rem 0.375rem 0 rgba(0,0,0,.6);
          border-radius: 0.875rem;
          .item{
            width: 100%;
            height: 100%;
            border-radius: 0.875rem;
            overflow: hidden;
            border: 2px solid #fff;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .item-box:not(:first-child){
          margin-top: 0.5625rem;
        }
      }
    }
    .content-middle:after{
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    .content-bottom{
      margin-top: 0.5625rem;
      .item-box{
        float: left;
        width: 9.0625rem;
        height: 9.0625rem;
        display: block;
        position: relative;
        background-color: #fff;
        box-shadow: 0 0.125rem 0.375rem 0 rgba(0,0,0,.6);
        border-radius: 0.875rem;
        .item{
          width: 100%;
          height: 100%;
          border-radius: 0.875rem;
          overflow: hidden;
          border: 2px solid #fff;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .item-box:not(:first-child){
        margin-left: 0.624rem;
      }
    }
    .content-bottom:after{
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
  .adv{
    margin-top: 0.5625rem;
    background-color: #f7f7f7;
    .adv-title{
      line-height: 1.4375rem;
      font-size: .8125rem;
      color: #333;
      text-align: center;
    }
  }
}
</style>
