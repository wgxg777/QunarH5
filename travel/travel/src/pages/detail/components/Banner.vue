<template>
  <div>
    <div class="banner" @click="handdleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201306/04/e6a374c53b689923c8d65eac.jpg_600x330_42925612.jpg"/>
      <div class="banner-info">
        <div class="banner-tittle">两江夜游·朝天系列游船</div>
        <div class="banner-number">
          <span class="iconfont arrow-icon banner-icon">&#xe609;</span>
          39
          </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="closeBox"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1611/d2/d2bd037272bc897fa3.water.jpg_r_800x800_b06d038f.jpg',
        'http://img1.qunarzz.com/sight/p0/1409/12/f1a47d121030ab369662268af2e083ff.jpg_r_800x800_718df0c0.jpg'],
      showGallary: false
    }
  },
  methods: {
    handdleBannerClick () {
      this.showGallary = true
    },
    closeBox () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom: 55%
    position relative
    .banner-img
      width 100%
    .banner-info
     display flex
     position absolute
     left 0
     right 0
     bottom 0
     line-height .6rem
     color #fff
     background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
     .banner-tittle
      flex 1
      font-size .32rem
      padding 0 .2rem
     .banner-number
      height .32rem
      line-height .32rem
      padding 0 .4rem
      border-radius .2rem
      background rgba(0,0,0,.8)
      font-size .24rem
      margin-top .14rem
      .banner-icon
        font-size .24rem

</style>
