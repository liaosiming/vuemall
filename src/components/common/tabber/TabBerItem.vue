<template>
  	<div class="tab-ber-item" @click="itemLink()">
      <div v-if="!isActive"><slot name="item-img"></slot></div>
      <div v-else><slot name="item-img-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  props:{
    path: String,
    activeColor:{
      type:String,
      default: 'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemLink(){
      this.$router.replace(this.path)
    }
  }
};
</script>

<style>
.tab-ber-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-ber-item img{
    height: 25px;
    width: 30px;
    vertical-align:middle
  }
  .active{
    color: red;
  }
</style>