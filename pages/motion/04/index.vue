<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.go(-1)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">연애 하루 전 8bit</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4503c4b0-27cb-11e9-a740-67ba1a06b5dd/aeicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        Lico애니메이션의 특별영상
      </div>
    </div>
    <div class="rect">
      <iframe src="https://player.vimeo.com/video/315234880?autoplay=1&loop=1&muted=1&autopause=0&background=1&title=0&byline=0"
              ref="player"
              id="player"
              class="video"
              :width="width"
              :height="width*9/16"
              frameborder="0"></iframe></div>
    <div class="rect">
      <iframe src="https://player.vimeo.com/video/315234640?autoplay=1&loop=1&muted=1&autopause=0&background=1&title=0&byline=0"
              ref="player"
              id="player"
              class="video"
              :style="{'margin-top': '8px'}"
              :width="width"
              :height="width*9/16"
              frameborder="0"></iframe>
    </div>
    <div class="text">
      피키캐스트에서 할로윈 시기에 맞추어 앱 시작할 때, 나타나는<br>
      이미지 피키캐스트의 캐릭터들을 활용하여 제작했습니다.<br>
      <br>
      2초가량의 짧은 짤이지만 다양한 움직임을 보여주려했습니다.<br>
      <br>
      아이패드로 이미지를 제작하고 에펙으로 움직임을 준 뒤<br>
      포토샵에서 마무리 작업을 했습니다.
    </div>
    <img class="image"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549285762/heihei/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA01.jpg'">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549285762/heihei/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA02.jpg'">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549285762/heihei/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA03.jpg'">
    <div class="text">
      원래 애니메이션의 분위기가 수채화느낌이 강한 순정만화에 가까웠기 때문에 도트디자인으로 진행했을때 분위기가 따로 놀지 않도록 색감을 기존의 색상보다 더 파스텔톤으로 잡았습니다.<br>
      <br>
      욱, 여름커플과 하은, 연우커플의 대표적인 색상이 있어서 그 부분 또한 신경써서 디자인했습니다.<br>
      <br>
      외등등 외등등
    </div>
    <img class="image"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549285764/heihei/source_all.jpg'">
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
    width: window.innerWidth >= 500 ? 500 : window.innerWidth,
  }),
  mounted() {
    window.addEventListener('resize', this.windowResized)
    window.scrollTo(0, 0)
  },
  methods: {
    windowResized() {
      this.width = window.innerWidth <= 500 ? window.innerWidth : this.width
    },
    scaledImage(url) {
      return url.slice(0, 50) + 'c_scale,w_750/' + url.slice(50)
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
    padding-top: 56.25%;
    position: relative;
    font-weight: normal;
    line-height: 17px;
    font-size: 12px;
    .video {
      position: absolute;
      top: 0;
      /* margin: 0; */
      display: block;
      z-index: -1;
      /* height: 100%; */
    }
    .image {
      width: 100%;
      position: absolute;
      top: 0;
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
      background: radial-gradient(closest-side, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
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