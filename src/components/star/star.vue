<template>
    <div class="star" :class="starType">
        <span class="star-item" v-for="(itemClass) in itemClasses" :class="itemClass" :key="itemClass" ></span>
    </div>
</template>

<script>
const STAR_LENGTH = 5;
const CLSS_ON = 'on';
const CLSS_OFF = 'off';
const CLSS_HALF = 'half';
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
      return 'star' + this.size;
    },
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2; // 向下取
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push(CLSS_ON);
      }
      if (hasDecimal) {
        result.push(CLSS_HALF);
      }
      while (result.length < STAR_LENGTH) {
        result.push(CLSS_OFF);
      }
      //   console.log(result);
      return result;
    }
  }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
    .star
        font-size 0
        text-align center
        margin-top 10px
        .star-item
            display inline-block
            background-repeat no-repeat
        &.star48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
            :last-child
              margin-right 0
            .on
              bg-image('images/star48_on')
            .half
              bg-image('images/star48_half')
            .off
              bg-image('images/star48_off')
        &.star36
            .star-item
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px
            &:last-child
                margin-right 0
            &.on
                bg-image('images/star36_on')
            &.half
                bg-image('images/star36_half')
            &.off
                bg-image('images/star36_off')
        &.star24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
            &:last-child
                margin-right 0
            &.on
                bg-image('images/star24_on')
            &.half
                bg-image('images/star24_half')
            &.off
                bg-image('images/star24_off')
</style>
