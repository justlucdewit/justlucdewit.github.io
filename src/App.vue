<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
export default {
  components:{Navbar}
}
</script>

<style lang="scss">
* {
    margin-block-start: 0;
}

#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root{
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: Open Sans;
}

body{
  color:#000;
  background-color: #fff;
  margin: 0;
  padding: 0;
}

html{
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}
</style>
