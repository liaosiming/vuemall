<template>
  <div id="app">
    <router-view/>
    <main-tab-ber/>
  </div>
</template>

<script>
import MainTabBer from "components/content/MainTabBer/MainTabBer.vue";
export default {
  name: "App",
  components: {
    MainTabBer
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
