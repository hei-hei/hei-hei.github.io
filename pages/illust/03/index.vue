<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.go(-1)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">제주항공 달력</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        달력 삽화
      </div>
    </div>
    <div class="text">
      모나미의 cvs전략으로, 20대 층을 타겟으로 삼아 black run이라는 청춘마라톤을 기획했습니다. 그 기획에서 다양한 사람들이 다양한 생각을 가지고 달리자는 컨셉을 중심으로 진행했고, 다양한 사람들을 모나미의 대표 문구들을 이용해서 표현하거나, 긍정적인 모습을 보여주는 캐릭터들을 디자인하여 행사 전반의 분위기를 가깝고 쉽게 접할 수 있음을 보여주려 했습니다.
    </div>
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266294/heihei/jeju.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266293/heihei/macau.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266294/heihei/nha_trang.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266294/heihei/osaka.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266294/heihei/saipan.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266294/heihei/taipei.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266294/heihei/tokyo.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266295/heihei/yentai.jpg')">
    <copy-right />
  </section>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue'

export default {
  components: {
    CopyRight,
  },
  data: () => ({
    width: window.innerWidth,
  }),
  mounted() {
    window.addEventListener('resize', this.windowResized)
    window.scrollTo(0, 0)
  },
  methods: {
    windowResized() {
      this.width = window.innerWidth
    },
    scaledImage(url) {
      return url.slice(0, 50) + 'c_scale,q_95,w_750/' + url.slice(50)
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowResized)
  },
  transition: {
    mode: 'out-in',
    enterActiveClass: 'fade-enter-active',
    leaveActiveClass: 'fade-leave-active',
    appearActiveClass: 'fade-enter-active',
  },
}
</script>

<style lang="scss" scoped>
.container {
  .top {
    margin-left: 37px;
    margin-top: 71px;
    position: relative;
    height: 123px;
    .arrow__back {
      padding: 19px;
      margin-top: -19px;
      margin-left: -19px;
      cursor: pointer;
    }
    .caption {
      display: inline-block;
      position: absolute;
      right: 39px;
      font-weight: normal;
      line-height: 17px;
      font-size: 12px;
    }
    .title {
      display: inline-block;
      position: absolute;
      top: 29px;
      left: 0;
      font-weight: 800;
      line-height: 24px;
      font-size: 22px;
    }
    .tools {
      display: inline-block;
      position: absolute;
      right: 39px;
      top: 29px;
      .icon {
        margin-left: 5px;
        display: inline-block;
      }
    }
    .desc {
      display: inline-block;
      position: absolute;
      top: 60px;
      left: 0px;
      line-height: 17px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.38);
    }
  }
  .rect {
    display: block;
    position: relative;
    font-weight: normal;
    line-height: 17px;
    font-size: 12px;
    width: 100%;
    padding-top: 151%;
    div {
      &::after {
        z-index: 99;
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.03);
      }
    }
    .image {
      /* width: 100%; */
    }
    .left {
      display: inline-block;
      width: calc(50% - 4px);
      left: 0;
      top: 0;
      position: absolute;
    }
    .right {
      position: absolute;
      display: inline-block;
      width: calc(50% - 4px);
      top: 0;
      right: 0;
    }
    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      /* margin-top: 4px; */
    }
    &::before {
      z-index: 999;
      content: '';
      display: block;
      position: absolute;
      min-width: calc(100% + 50px);
      min-height: 68px;
      left: -25px;
      top: -40px;
      /* background: radial-gradient(closest-side, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%); */
      clip: rect(40px, 9999px, 68px, 0px);
    }
  }
  .text {
    /* margin-top: 24px; */
    margin-left: 37px;
    margin-right: 37px;
    margin-bottom: 30px;
    line-height: 19px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
  }
  .image {
    display: block;
    width: 100%;
  }
}
</style>
¬