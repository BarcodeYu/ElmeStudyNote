<template>
 <div id="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="seller.avatar" alt="">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            <span>{{seller.description}}/{{seller.deliveryTime}}分钟</span>
          </div>
          <div class="supports" v-if="seller.supports">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div class="support-count" v-if="seller.supports" @click="openDetail">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="bulletin-wrapper" @click="openDetail">
        <span class="bulletin_title"></span>
        <span class="bulletin_text">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img width="100%" height="100%" :src="seller.avatar" alt="">
      </div>
      <div class="detail" v-show="detailShow">
        <div class="detail_wrapper clearfix">
          <div class="detail_main">
            <h1 class="detail_name">{{seller.name}}</h1>
            <star :score="seller.score" :size="48"></star>
          </div>
        </div>
        <div class="detail_close">
          <i class="icon-close" @click="detailClose()"></i>
        </div>
      </div>
  </div>
</template>

<script>
import star from '../star/star.vue';

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    openDetail: function() {
      this.detailShow = true;
    },
    detailClose: function() {
      this.detailShow = false;
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components: {
    'star': star
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
#header
  position relative
  color #fff
  text-align left
  background rgba(7,17,27,0.5)
  overflow hidden
  .content-wrapper
    position relative
    padding 24px 12px 18px 24px
    font-size 0
    .avatar
      display inline-block
      vertical-align top
      img
        border-radius 2px
    .content
      display inline-block
      margin-left 16px
      font-size 14px
      .title
        margin  2px 0 8px 0
        .brand
          display inline-block
          width 30px
          height 18px
          bg-image ('brand')
          background-size 30px 18px
          background-repeat no-repeat
          vertical-align top
        .name
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
      .description
        margin-bottom 10px
        line-height 12px
        font-size 12px
      .supports
        .icon
          display inline-block
          height 12px
          width 12px
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat
          vertical-align top
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('decrease_1')
          &.guarantee
            bg-image('guarantee_1')
          // &.invoice
          //   bg-image('invoice_1')
          // &.special
          //   bg-image('special_1')
        .text
          line-height 12px
          font-size 10px
          vertical-align top
    .support-count
      position absolute
      right 12px
      bottom 14px
      padding 0 8px
      height 24px
      line-height 24px
      border-radius 14px
      background rgba(0,0,0,0.2)
      text-align center
      color #fff
      .count
        vertical-align top
        font-size 10px
      .icon-keyboard_arrow_right
        margin-left 2px
        font-size 10px
        line-height 24px
  .bulletin-wrapper
    position relative
    height 28px
    line-height 28px
    padding 0 22px 0 22px
    white-space: nowrap
    overflow hidden
    text-overflow ellipsis
    .bulletin_title
      display inline-block
      width 22px
      height 12px
      bg-image ('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
      vertical-align middle
    .bulletin_text
      font-weight 200
      font-size 10px
      margin-left 4px
      vertical-align middle
    .icon-keyboard_arrow_right
      position absolute
      font-size 10px
      line-height 24px
      right 12px
      top 3px
  .background
    position absolute
    top 0
    left 0
    width 100%
    z-index -1
    filter blur(10px)
  .detail
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    overflow auto
    background rgba(7,17,27,0.8)
    z-index 20
    .detail_wrapper
      min-height 100%
      width 100%
      .detail_main
        margin-top 64px
        padding-bottom 64px
        .detail_name
          line-height 16px
          text-align center
          font-size 16px
          font-weight 700
    .detail_close
      position relative
      width 32px
      height 32px
      margin -64px auto 0 auto
      clear both
      font-size 32px

</style>
