<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">소핫</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4503c4b0-27cb-11e9-a740-67ba1a06b5dd/aeicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/ae55a190-286b-11e9-b507-dfed5458c07c/ailogo.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        에디터 소핫의 리브랜딩
      </div>
    </div>
    <img class="image"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282773/heihei/sohot_start.gif'">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282769/heihei/sohot_end.gif'">
    <div class="text">
      감정의 덩어리가 목에서 탁 하고 걸리다.<br>
      <br>
      갑작스럽게 걸려버린 감정 덩어리를<br>
      가만히 바라보다가 기분이 이상해진다.<br>
      물 위에 떠 있는 듯이,<br>
      편안하지만 불편한 느낌이다<br>
    </div>
    <img class="image"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282765/heihei/%E1%84%89%E1%85%A9%E1%84%92%E1%85%A1%E1%86%BA_%E1%84%90%E1%85%A6%E1%86%B7%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%BA_%E1%84%86%E1%85%A9%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%B8.jpg'">
    <!-- <div class="rect" -->
    <!-- :style="{'margin-top': '8px'}"> -->
    <!-- <iframe src="https://player.vimeo.com/video/315238701?autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0"
              ref="player"
              id="player"
              class="video"
              :width="width"
              :height="width"
              frameborder="0"></iframe> -->
    <!-- </div>
    <div class="rect" -->
    <!-- :style="{'margin-top': '8px'}"> -->
    <!-- <iframe src="https://player.vimeo.com/video/315238678?autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0"
              ref="player"
              id="player"
              class="video"
              :width="width"
              :height="width"
              frameborder="0"></iframe> -->
    <vimeo-player ref="player"
                  class="video"
                  :style="{'margin-top': '8px'}"
                  :video-id="315238701"
                  :player-width="width"
                  :player-height="width"
                  :loop="true"
                  :autoplay="true"
                  :options="{ autopause: false }" />
    <vimeo-player ref="player"
                  class="video"
                  :style="{'margin-top': '8px'}"
                  :video-id="315238678"
                  :player-width="width"
                  :player-height="width"
                  :loop="true"
                  :autoplay="true"
                  :options="{ autopause: false }" />
    <!-- </div> -->
    <div class="grid"
         :style="{'margin-top': '8px'}">
      <img class="image"
           :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282751/heihei/donhot_4hour.gif'">
      <div></div>
      <img class="image"
           :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282775/heihei/donhot_cover.gif'">
    </div>
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282754/heihei/donhot_yeah.gif'">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282758/heihei/%E1%84%89%E1%85%A9%E1%84%92%E1%85%A1%E1%86%BA_%E1%84%91%E1%85%B3%E1%84%87%E1%85%A2.jpg'">
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
      return url.slice(0, 50) + 'c_scale/' + url.slice(50)
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
    padding-top: 100%;
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
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 8px 1fr;
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
    margin-right: 37px;
    color: rgba(0, 0, 0, 0.54);
  }
  .image {
    display: block;
    width: 100%;
  }
}
</style>
¬