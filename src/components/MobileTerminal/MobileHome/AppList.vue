<template>
  <div>
    <div class="app-list" v-for="(item,index) in appGameList" :key="index">
      <div class="app-list-content">
        <div class="content-top">
          <div class="item" @click="detailsClick" v-show="item[0] && item[0].iconUrl"><img :src="item[0] && item[0].iconUrl" alt=""></div>
          <div class="item" v-show="item[1] && item[1].iconUrl"><img :src="item[1] && item[1].iconUrl" alt=""></div>
          <div class="item" v-show="item[2] && item[2].iconUrl"><img :src="item[2] && item[2].iconUrl" alt=""></div>
        </div>
        <div class="content-middle" v-if="(index + 1) % 2 !== 0">
          <div class="middle-left">
            <div class="item" v-show="item[3] && item[3].iconUrl"><img :src="item[3] && item[3].iconUrl" alt=""></div>
          </div>
          <div class="middle-right">
            <div class="item-box" v-show="item[4] && item[4].iconUrl"><div class="item"><img :src="item[4] && item[4].iconUrl" alt=""></div></div>
            <div class="item-box" v-show="item[5] && item[5].iconUrl"><div class="item"><img :src="item[5] && item[5].iconUrl" alt=""></div></div>
          </div>
          <div></div>
        </div>
        <div class="content-middle" v-if="(index + 1) % 2 === 0">
          <div class="middle-right">
            <div class="item-box" v-show="item[3] && item[3].iconUrl"><div class="item"><img :src="item[3] && item[3].iconUrl" alt=""></div></div>
            <div class="item-box" v-show="item[4] && item[4].iconUrl"><div class="item"><img :src="item[4] && item[4].iconUrl" alt=""></div></div>
          </div>
          <div class="middle-left2">
            <div class="item" v-show="item[5] && item[5].iconUrl"><img :src="item[5] && item[5].iconUrl" alt=""></div>
          </div>
          <div></div>
        </div>
        <div class="content-top">
          <div class="item" v-show="item[6] && item[6].iconUrl"><img :src="item[6] && item[6].iconUrl" alt=""></div>
          <div class="item" v-show="item[7] && item[7].iconUrl"><img :src="item[7] && item[7].iconUrl" alt=""></div>
          <div class="item" v-show="item[8] && item[8].iconUrl"><img :src="item[8] && item[8].iconUrl" alt=""></div>
        </div>
        <div class="content-bottom">
          <div class="item-box" v-show="item[9] && item[9].iconUrl"><div class="item"><img :src="item[9] && item[9].iconUrl" alt=""></div></div>
          <div class="item-box" v-show="item[10] && item[10].iconUrl"><div class="item"><img :src="item[10] && item[10].iconUrl" alt=""></div></div>
        </div>
      </div>
      <div class="adv" v-if="index === 0"><h6 class="adv-title">Advertisement</h6></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppList",
  props: ['appGameList'],
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    detailsClick() {
      this.$router.push({
        path: '/M/details'
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
          background: white;
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
            background: white;
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
            background: white;
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
              background: white;
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
            background: white;
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
