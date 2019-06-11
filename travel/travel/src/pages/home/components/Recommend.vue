<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src='item.imgUrl'/>
        <div class="item-info">
          <p class="item-title">{{item.titel}}</p>
          <p  class="item-desc">{{item.desc}}</p>
          <button  class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/12/ed83b9bb54ccc7ff1f0989a7ebc2e312.jpg_200x200_4012e875.jpg',
        titel: '重庆必打卡',
        desc: '非去不可'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/20/6e6f2e977729f8d393835fbb.jpg_200x200_e1e04c97.jpg',
        titel: '印象武隆',
        desc: '武隆县'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1611/d2/d2bd037272bc897fa3.water.jpg_200x200_c4c10b57.jpg',
        titel: '两江夜游·金碧系列游船',
        desc: '重庆两江冲刺'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/69/cffff677087a157a13bc7eec0e9e67e7.water.jpg_200x200_72ae4813.jpg',
        titel: '两江夜游·朝天系列游船',
        desc: '巫山县'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/8d/8d1817185ad3f395.img.jpg_200x200_7971dc7e.jpg',
        titel: '武隆天生三桥风景区',
        desc: '武隆天坑冲冲冲'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff

</style>
