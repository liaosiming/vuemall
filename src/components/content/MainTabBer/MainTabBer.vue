<template>
    <tab-ber>
      <tab-ber-item path='/home'>
        <img slot="item-img" src="~assets/image/tabber/home.svg" alt="">
         <img slot="item-img-active" src="~assets/image/tabber/home-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-ber-item>
      <tab-ber-item path='/category'>
        <img slot="item-img" src="~assets/image/tabber/category.svg" alt="">
         <img slot="item-img-active" src="~assets/image/tabber/category-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-ber-item>
      <tab-ber-item path='/cart'>
        <img slot="item-img" src="~assets/image/tabber/shoppingcart.svg">
         <img slot="item-img-active" src="~assets/image/tabber/shoppingcart-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-ber-item>
      <tab-ber-item path='/profile'>
        <img slot="item-img" src="~assets/image/tabber/profile.svg" alt="">
         <img slot="item-img-active" src="~assets/image/tabber/profile-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-ber-item>
    </tab-ber>
</template>

<script>
import TabBer from 'components/common/tabber/TabBer.vue'
import TabBerItem from 'components/common/tabber/TabBerItem.vue'
export default {
  components: { TabBer,TabBerItem }
}
</script>

<style>

</style>