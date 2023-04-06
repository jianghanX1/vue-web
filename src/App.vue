<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      this.$router.push({
        path: '/',
        query: {}
      },()=>{})
    } else {
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
