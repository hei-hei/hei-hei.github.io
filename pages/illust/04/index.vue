<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.go(-1)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">Mafoo</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        강아지 사료 패키지 삽화
      </div>
    </div>
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266923/heihei/mafoo_%E1%84%89%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB3.jpg')">
    <div class="text">
      모나미의 cvs전략으로, 20대 층을 타겟으로 삼아 black run이라는 청춘마라톤을 기획했습니다. 그 기획에서 다양한 사람들이 다양한 생각을 가지고 달리자는 컨셉을 중심으로 진행했고, 다양한 사람들을 모나미의 대표 문구들을 이용해서 표현하거나, 긍정적인 모습을 보여주는 캐릭터들을 디자인하여 행사 전반의 분위기를 가깝고 쉽게 접할 수 있음을 보여주려 했습니다.
    </div>
    <div class="rect">
      <div class="left">
        <img class="image"
             :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266938/heihei/mafoo_%E1%84%89%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB1.jpg')">
      </div>
      <div class="right">
        <img class="image"
             :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266924/heihei/mafoo_%E1%84%89%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB2.jpg')">
      </div>
    </div>
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266916/heihei/mafoo_scene01.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266916/heihei/mafoo_scene02.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549266916/heihei/mafoo_scene03.jpg')">
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
    display: flex;
    position: relative;
    font-weight: normal;
    line-height: 17px;
    font-size: 12px;
    width: 100%;
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
    }
    .left {
      display: inline-block;
      width: 50%;
    }
    .right {
      display: inline-block;
      width: 50%;
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
    margin-top: 24px;
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