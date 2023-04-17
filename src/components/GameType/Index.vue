<template>
  <div>
    <Navigation></Navigation>
    <Content></Content>
    <div class="new-games-bottom">
      <Bottom
        titleType="2"
      />
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import BottomNav from '@/components/BottomNav';
import Content from '@/components/HomeIndex/Content';
import Bottom from '@/components/HomeIndex/Bottom';
import { determinePcOrMove } from '@/utils/utils.js'
export default {
  name: "Index",
  components: {
    Content,Bottom,Navigation,BottomNav
  },
  created() {
    const { query } = this.$route
    const { gameType } = query || {}
    if (determinePcOrMove() == 1) {
      this.$router.push({
        path: '/M/gameType',
        query: {
          gameType
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .new-games-bottom{
    padding: 16px 60px 0;
  }
</style>
