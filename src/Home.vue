<template>
  <div v-if="screenType === 2">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
  <div v-else>
    <StartAndEnd>
      <div>
        <TopBox></TopBox>
        <AppList></AppList>
        <BottomList></BottomList>
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
export default {
  name: "Home",
  components: {
    Navigation,TopBox,AppList,BottomList,BottomText,StartAndEnd
  },
  data() {
    return {
      screenType: 1, // 1. 手机  2. pc
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
  }
}
</script>

<style lang="less" scoped>

</style>
