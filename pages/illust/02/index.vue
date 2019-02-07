<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">그 후로도 오랫동안</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/0d470580-284a-11e9-bffd-ef41006669ed/idlogo.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        책 일러스트 및 그래픽
      </div>
    </div>
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549265464/heihei/IMG_2741.png')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549265460/heihei/IMG_2740.png')">
    <div class="text">
      ‘그 이후로도 오랫동안' 이라는 편집물을 제작하면서 삽화로 그린 그림입니다. 왕따라는 주제로 왕따 트라우마는 시간이 지나도 오랫동안 마음속에 응어리로 남는다는 메시지를 마음속의 돌덩어리로 표현했습니다.
    </div>
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549265456/heihei/05.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549265458/heihei/01.jpg')">
    <div class="text">
      페이지 사이사이마다 마지막에 나올 그래프에 대한 정보들을 배경으로 깔아서 마음 속의 응어리를 계속 짊어지고 간다는 것을 표현했습니다.<br><br>

      위의 그래프는 왕따에 대한 생각을 청소년들에게 설문했을 때의 결과이고, 아래의 그래프는 포털사이트에서의 검색량을 기준으로 왕따에 관련한 정보들을 시기별로 얼마나 어떻게 검색하는지에 대한 내용입니다.
    </div>
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549265459/heihei/IMG_2738_%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB.png')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549265461/heihei/IMG_2739.png')">
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