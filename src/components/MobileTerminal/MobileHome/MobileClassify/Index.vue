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
export default {
  name: "index",
  components: {
    BottomList,BottomText,StartAndEnd,ClassList
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
