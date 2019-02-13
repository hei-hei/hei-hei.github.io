<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
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
      하림에서 새로 나오는 mafoo의 패키지 속 삽화입니다.<br><br>

      사료가 만들어지는 과정을 베이킹 레시피처럼 그려 친환경적이고 건강해보이는 이미지를 만들었습니다.
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
export default {
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