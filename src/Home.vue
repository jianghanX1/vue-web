<template>
  <div v-if="screenType === 2">
    <Navigation></Navigation>
    <router-view></router-view>
    <div class="end">
      <a href="/static/mobile/html/privacy_policy.html" target="_blank">Privacy</a>
      <a href="/static/mobile/html/contact.html" target="_blank">Contact us</a>
    </div>
  </div>
  <div v-else>
    <StartAndEnd>
      <div>
        <TopBox :topGameList="topGameList"></TopBox>
        <AppList :appGameList="appGameList"></AppList>
        <BottomList :bottomGameList="bottomGameList"></BottomList>
        <BottomText></BottomText>
      </div>
    </StartAndEnd>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import StartAndEnd from "@/components/MobileTerminal/MobileHome/StartAndEnd";
import TopBox from "@/components/MobileTerminal/MobileHome/TopBox";
import AppList from "@/components/MobileTerminal/MobileHome/AppList";
import BottomList from "@/components/MobileTerminal/MobileHome/BottomList";
import BottomText from "@/components/MobileTerminal/MobileHome/BottomText";
import { getGameList } from '@/utils/utils.js'
export default {
  name: "Home",
  components: {
    Navigation,TopBox,AppList,BottomList,BottomText,StartAndEnd
  },
  data() {
    return {
      screenType: 1, // 1. 手机  2. pc
      topGameList: [], // 移动端头部游戏列表
      appGameList: [], // 中间游戏列表
      bottomGameList: [], // 底部游戏列表
    }
  },
  created() {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      //fontsize计算
      document.documentElement.style.fontSize = document.documentElement.clientWidth/320 * 16 +'px'
      console.log(document.documentElement.style.fontSize);
      this.screenType = 1
    } else {
      this.screenType = 2
    }
  },
  mounted() {
    getGameList().then((res)=>{
      console.log(res);
      const { data } = res || {}
      const { code, data:dataObj } = data || {}
      if (code == 1) {
        let arr = dataObj || [] // 原数组
        this.topGameList = arr.splice(0,5) // 头部五条数据
        this.bottomGameList = arr.splice(arr.length - 8,8) // 底部五条数据
        let newArr = [] // 新数组
        let num = Math.ceil(arr.length / 11)
        for ( let i = 1; i <= num; i++ ) {
          newArr[i - 1] = arr.splice(0,11)
        }
        this.appGameList = newArr
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
}
</script>

<style lang="less" scoped>
.end{
  margin-top: 1rem;
  height: 1.75rem;
  background-color: #042697;
  text-align: center;
  color: #fff;
  font-size: .5625rem;
  line-height: 1.75rem;
  overflow: hidden;
  a {
    text-decoration: none;
  }
}
.end>a:not(:last-child) {
  margin-right: 1rem;
}
.end>a {
  color: #fff;
  position: relative;
}
.end>a:not(:last-child):before {
  content: "";
  height: 0.8125rem;
  width: 0.0625rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -0.65rem;
}
</style>
