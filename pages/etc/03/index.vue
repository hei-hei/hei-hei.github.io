<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">C4D</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4503c4b0-27cb-11e9-a740-67ba1a06b5dd/aeicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/3e5d4b90-287f-11e9-aaec-41893bf0d684/c4dicon.svg">
      </div>
      <div class="desc">
        3d 작업물 모음
      </div>
    </div>
    <!-- <vimeo-player ref="player"
                  class="video"
                  :video-id="315234295"
                  :player-width="width"
                  :player-height="width*9/16"
                  :loop="true"
                  :autoplay="true"
                  :options="{ autopause: false }" /> -->
    <iframe src="https://player.vimeo.com/video/315234295?autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0"
            ref="player"
            id="player"
            class="video"
            :width="width"
            :height="width*9/16"
            :style="{'background-image': `url('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549354415/heihei/image8.jpg')`}"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen></iframe>
    <!-- <video :width="width"
           :height="width*9/16"
           controls
           autoplay
           loop
           muted
           preload
           src="https://res.cloudinary.com/dvcuac7zg/video/upload/v1549342426/heihei/02_01.mp4">
    </video> -->
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549287791/heihei/%E1%84%86%E1%85%A9%E1%84%89%E1%85%A7%E1%86%AB_01_%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg')">
    <div class="text">
      c4d로 공간감과 구성을 표현하기 위해 알파벳을 응용해서 영상과 이미지를 만들었습니다.
    </div>
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549287789/heihei/baaaaaaam_light.jpg')">
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549287789/heihei/baaaam_rigging.jpg')">
    <div class="text">
      다양한 질감표현을 연습하기 위해 한 가지 오브젝트에 다양한
      효과와 라이트를 넣은 이미지입니다.
    </div>
    <!-- <div class="rect"> -->
    <iframe src="https://player.vimeo.com/video/315234321?autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0"
            ref="player"
            id="player"
            class="video"
            :width="width"
            :height="width*9/16"
            :style="{'background-image': `url('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549354415/heihei/image9.jpg')`}"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen></iframe>
    <!-- <vimeo-player ref="player"
                  class="video"
                  :video-id="315234321"
                  :player-width="width"
                  :player-height="width*9/16"
                  :loop="true"
                  :autoplay="true"
                  :options="{ autopause: false }" /> -->

    <!-- <video :width="width"
           :height="width*9/16"
           controls
           autoplay
           loop
           muted
           preload
           src="https://res.cloudinary.com/dvcuac7zg/video/upload/v1549342187/heihei/%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%8C%E1%85%B5%E1%84%89%E1%85%A7%E1%86%AB_1_1.mp4">
    </video> -->
    <!-- </div> -->
    <div class="text">
      캐릭터의 걸음걸이와 Rigging에 대해 공부하기 위해서 만든
      걸어가는 레몬입니다.
    </div>
    <copy-right />
  </section>
</template>

<script>
export default {
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
    position: relative;
    font-weight: normal;
    line-height: 17px;
    font-size: 12px;
    padding-top: 56.25%;
    .video {
      position: absolute;
      top: 0;
      /* margin: 0; */
      display: block;
      z-index: -1;
      /* height: 100%; */
    }
    .image {
      display: block;
      width: 100%;
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