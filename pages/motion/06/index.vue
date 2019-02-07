<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">My Room</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4503c4b0-27cb-11e9-a740-67ba1a06b5dd/aeicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/3e5d4b90-287f-11e9-aaec-41893bf0d684/c4dicon.svg">
      </div>
      <div class="desc">
        개인적인 공간에 대하여
      </div>
    </div>
    <!-- <div class="rect"> -->
    <iframe src="https://player.vimeo.com/video/315235239?autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0"
            ref="player"
            id="player"
            class="video"
            :width="width"
            :height="width*9/16"
            :style="{'background-image': `url('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549354415/heihei/image4.jpg')`}"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen></iframe>
    <!-- </div> -->
    <!-- <vimeo-player ref="player"
                  class="video"
                  :video-id="315235239"
                  :player-width="width"
                  :player-height="width*9/16"
                  :loop="true"
                  :autoplay="true" /> -->
    <!-- <video :width="width"
           :height="width*9/16"
           controls
           autoplay
           loop
           muted
           preload
           src="https://res.cloudinary.com/dvcuac7zg/video/upload/v1549342957/heihei/Comp_1.mp4">
    </video> -->
    <div class="text">
      나의 개인적인 공간에 대한 주제로 나의 방을 표현했습니다.<br><br>

      혼자 휴대폰을 챙기고 2층 침대의 아랫칸에 들어가면 외부와 멀어지면서 나만의 공간이 생기는 듯한 느낌을 받습니다. 그 느낌을 일반적인 방일 때와 불을 끄고 핸드폰을 딱 켰을 때 배경의 색상을 다르게 해서 강조했고, 화면 안에서 파티클이 나오면서 즐거운 느낌을 주고자 했습니다.
    </div>
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
  .video {
    display: block;
    width: 100%;
    background-size: contain;
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
    margin-right: 39px;
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