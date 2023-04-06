<template>
  <div>
    <Content></Content>
    <div class="new-games-bottom">
      <Bottom
        titleType="3"
      />
    </div>
  </div>
</template>

<script>
import Content from '@/components/HomeIndex/Content';
import Bottom from '@/components/HomeIndex/Bottom';
export default {
  name: "Index",
  components: {
    Content,Bottom
  }
}
</script>

<style lang="less" scoped>
  .new-games-bottom{
    padding: 16px 60px 0;
  }
</style>
