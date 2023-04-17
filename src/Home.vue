<template>
  <router-view></router-view>
</template>

<script>
import { determinePcOrMove } from '@/utils/utils.js'
export default {
  name: "Home",
  created() {
    console.log(determinePcOrMove());
  }
}
</script>

<style lang="less" scoped>

</style>
