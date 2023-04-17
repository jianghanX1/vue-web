<template>
  <StartAndEnd>
    <div>
      <ClassList></ClassList>
      <BottomList></BottomList>
      <BottomText></BottomText>
    </div>
  </StartAndEnd>
</template>

<script>
import StartAndEnd from "@/components/MobileTerminal/MobileHome/StartAndEnd";
import BottomList from "@/components/MobileTerminal/MobileHome/BottomList";
import BottomText from "@/components/MobileTerminal/MobileHome/BottomText";
import ClassList from "@/components/MobileTerminal/MobileHome/ClassList";
import { determinePcOrMove } from '@/utils/utils.js'
export default {
  name: "index",
  components: {
    BottomList,BottomText,StartAndEnd,ClassList
  },
  data() {
    return {

    }
  },
  created() {
    const { query } = this.$route
    const { gameType } = query || {}
    if (determinePcOrMove() == 2) {
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>

</style>
