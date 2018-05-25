<template>
  <div class="goods" id="goods" >
    <div class="menu_wrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="menu_item">
          <span class="text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods_wrapper">
        我是商品！
    </div>
  </div>
</template>

<script>
const ERR_OK = 0;

export default {
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        console.log(this.goods);
      };
    });
  },
  data() {
    return {
      goods: []
    };
  }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
  .goods
    position absolute
    display flex
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu_wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu_item
        display table
        height 50px
        width 56px
        line-height 14px
        padding 0 12px
        .icon
          display inline-block
          height 12px
          width 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          vertical-align top
          &.decrease
            bg-image('images/decrease_3')
          &.discount
            bg-image('images/decrease_3')
          &.guarantee
            bg-image('images/guarantee_3')
          &.invoice
            bg-image('images/invoice_3')
          &.special
            bg-image('images/special_3')
        .text
          display table-cell
          width 56px
          vertical-align middle
          font-size 12px
          border-1px(rgba(7,17,27,0.1))
    .foods_wrapper
      flex 1
</style>
