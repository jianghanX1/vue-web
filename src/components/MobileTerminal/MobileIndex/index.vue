<template>
  <StartAndEnd>
    <div>
      <TopBox :topGameList="topGameList"></TopBox>
      <AppList :appGameList="appGameList"></AppList>
      <BottomList :bottomGameList="bottomGameList"></BottomList>
      <BottomText></BottomText>
    </div>
  </StartAndEnd>
</template>

<script>
import StartAndEnd from "@/components/MobileTerminal/MobileHome/StartAndEnd";
import TopBox from "@/components/MobileTerminal/MobileHome/TopBox";
import AppList from "@/components/MobileTerminal/MobileHome/AppList";
import BottomList from "@/components/MobileTerminal/MobileHome/BottomList";
import BottomText from "@/components/MobileTerminal/MobileHome/BottomText";
import { getGameList, determinePcOrMove } from '@/utils/utils.js'
export default {
  name: "index",
  data() {
    return {
      topGameList: [], // 移动端头部游戏列表
      appGameList: [], // 中间游戏列表
      bottomGameList: [], // 底部游戏列表
    }
  },
  components: {
    StartAndEnd,TopBox,AppList,BottomList,BottomText
  },
  created() {
    if (determinePcOrMove() == 2) {
      this.$router.push({
        path: '/P/homeIndex'
      })
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
  },
}
</script>

<style scoped>

</style>
