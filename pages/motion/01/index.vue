<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.go(-1)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">선</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4503c4b0-27cb-11e9-a740-67ba1a06b5dd/aeicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        선에서 선으로 향하다
      </div>
    </div>
    <div class="rect">
      <!-- <iframe src="https://player.vimeo.com/video/315088638?autoplay=1&loop=1&muted=1&autopause=0&background=1&title=0&byline=0"
              ref="player"
              id="player"
              class="video"
              :width="width"
              :height="width*16/9"
              frameborder="0"></iframe> -->
      <iframe src="https://player.vimeo.com/video/315118224?autoplay=1&loop=1&muted=1&autopause=0&background=1&title=0&byline=0"
              ref="player"
              id="player"
              class="video"
              :width="width"
              :height="width*16/9"
              frameborder="0"></iframe>
      <!-- <img class="image"
           src="https://res.cloudinary.com/dvcuac7zg/image/upload/v1549216305/heihei/intro_motion.gif"> -->
    </div>
    <div class="text">
      감정의 덩어리가 목에서 탁 하고 걸리다.<br><br>

      갑작스럽게 걸려버린 감정 덩어리를<br>
      가만히 바라보다가 기분이 이상해진다.<br>
      물 위에 떠 있는 듯이,<br>
      편안하지만 불편한 느낌이다.<br><br>

      감정이 걸린 선 위를 다시 바라보다,<br>
      조금씩 다가가 살짝 맞닿는다.<br>
      닿아있는 동안, 어떻게 움직여야 할 지,<br>
      얼마나 버티고 있어야 하는 지에 대해 고민하다,<br><br>

      덜컥 밀려나다.<br><br>

      밀려난 것은 다른 밀려난 것을 따라가다<br>
      선 앞에서 탁하고 걸렸다.
    </div>
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549211389/heihei/%E1%84%8E%E1%85%A9%E1%84%80%E1%85%B5_%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5%E1%84%87%E1%85%A9%E1%84%83%E1%85%B3.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549211722/heihei/%E1%84%8E%E1%85%A9%E1%84%80%E1%85%B5_%E1%84%8F%E1%85%B5%E1%84%87%E1%85%B5%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%A5%E1%86%AF1.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549211729/heihei/%E1%84%8E%E1%85%A9%E1%84%80%E1%85%B5_%E1%84%8F%E1%85%B5%E1%84%87%E1%85%B5%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%A5%E1%86%AF2.jpg')">
    <div class="text">
      초기의 스토리보드와 키비주얼입니다.<br><br>

      여기에는 어떻게 생각을 시작하여 이 영상을 제작하게 되었는지, <br>어떤 의미를 담고자 하였는지에 대해서 쓰면 됩니다.<br><br>

      세문단 정도가 나오면 좋을 것 같습니다,<br> 기본적인 정보인 제작 시기도 함께 적어주면 좋을 듯 싶습니다.
    </div>
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549214009/heihei/card_mockup.jpg')">
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549214010/heihei/card_mockup2.jpg')">
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
  },
  methods: {
    windowResized() {
      this.width = window.innerWidth <= 600 ? window.innerWidth : this.width
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
    padding-top: 177.777777778%;
    position: relative;
    font-weight: normal;
    line-height: 17px;
    font-size: 12px;
    .video {
      position: absolute;
      top: 0;
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