<template>
  <div id="home">
     <nav-bar class="nav-home"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar.vue"
import { getHomeList } from "network/homeRequest";
export default {
  components: {
    NavBar
  },
  data() {
   return {
     result : null
   }
  },
  created(){
    getHomeList().then(res => {
      console.log(res);
    })
  }
}
</script>

<style>
.nav-home{
  background-color: violet;
  color: #fff;
}
</style>