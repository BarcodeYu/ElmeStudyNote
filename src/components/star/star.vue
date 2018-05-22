<template>
    <div class="star" :class="starType">
        <span class="star-item" v-for="itemClass in itemClasses" :class="itemClass"></span>
    </div>
</template>

<script>
const star_length = 5;
const Clss_on = 'on';
const Clss_off = 'off';
const Clss_half = 'half';
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size;
    },
    itemClass() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;//向下取
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for (let i = 0;i < integer; i++) {
        result.push(Clss_on);
      }
      if (hasDecimal) {
        result.push(Clss_half);
      }
      while (result.length < star_length) {
        result.push(Clss_off);
      }
      return result;
    }
  }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
    .star
        display block
        background-repeat no-repeat
        &.star-48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
            &:last-child
                margin-right 0
            &.on
                bg-img('star48-on')
            &.half
                bg-img('star48-half')
            &.off
                bg-img('star48-off')
        &.star-36
            .star-item
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px
            &.on
                bg-img('star36-on')
            &.half
                bg-img('star36-half')
            &.off
                bg-img('star36-off')
        &.star-24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
            &.on
                bg-img('star24-on')
            &.half
                bg-img('star24-half')
            &.off
                bg-img('star24-off')
</style>
