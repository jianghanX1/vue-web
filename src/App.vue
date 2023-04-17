<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    const { query } = this.$route
    const { routeType } = query || {}
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      if (routeType) {
        return
      }
      this.$router.push({
        path: '/',
        query: {}
      },()=>{})
    } else {
      if (routeType) {
        return
      }
      this.$router.push({
        path: '/',
        query: {}
      },()=>{})
    }
  }
}
</script>

<style>

</style>
