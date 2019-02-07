<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
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
    <iframe src="https://player.vimeo.com/video/315234880?autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0"
            ref="player"
            id="player"
            class="video"
            :width="width"
            :height="width*9/16"
            :style="{'background-image': `url('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549354415/heihei/image1.jpg')`}"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen></iframe>
    <iframe src="https://player.vimeo.com/video/315234640?autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0"
            ref="player"
            id="player"
            class="video"
            :style="{'margin-top': '8px', 'background-image': `url('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549354415/heihei/image2.jpg')`}"
            :width="width"
            :height="width*9/16"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen></iframe>
    <!-- <vimeo-player ref="player"
                  class="video"
                  :video-id="315234880"
                  :player-width="width"
                  :player-height="width*9/16"
                  :loop="true"
                  :autoplay="true"
                  :options="{ autopause: false }" />
    <vimeo-player ref="player"
                  class="video"
                  :style="{'margin-top': '8px'}"
                  :video-id="315234640"
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
           src="https://res.cloudinary.com/dvcuac7zg/video/upload/v1549343001/heihei/yeowook_comp.mp4">
    </video>
    <video :width="width"
           :height="width*9/16"
           :style="{'margin-top': '8px'}"
           controls
           autoplay
           loop
           muted
           preload
           src="https://res.cloudinary.com/dvcuac7zg/video/upload/v1549342957/heihei/hayeon_comp.mp4">
    </video> -->
    <div class="text">
      이 프로젝트는 life is comic의 애니메이션인 연애 하루전의 시즌 1이 끝나고 시즌 0가 나오기 전에 독자들이 즐길 수 있는 영상을 만드는 것이 목표였습니다. 유튜브에도 배포할 영상이였기 때문에 유튜브 영상의 트렌드와 꾸준히 사랑받는 컨텐츠에 대해서 공부했고, 옛날 게임분위기의 영상들은 현재도 꾸준히 올라오고 있고 과거의 영상도 사람들이 즐겨본다는 것을 알 수 있었습니다.<br><br>

      그래서 8bit컨셉의 연애 하루 전 특별영상을 만들었습니다.
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
      원래 애니메이션의 분위기가 수채화느낌이 강한 순정만화에 가까웠기 때문에 도트디자인으로 진행했을때 분위기가 따로 놀지 않도록 색감을 기존의 색상보다 더 파스텔톤으로 잡았습니다.<br><br>

      또한 게임적인 요소를 놓치지 않기 위해 각 스토리에 맞는 아이템을 선정하고, 인트로, 하이라이트 장면 등의 소스들도 스토리에 걸맞게 디자인했습니다.<br><br>

      욱, 여름커플과 하은, 연우커플각각의 대표적인 색상인 주홍빛 도는 노랑, 파랑, 연두, 보라 이 네가지 색상이 있어서 그 부분 또한 강조될 수 있도록 디자인했습니다.
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
      /* left: 0; */
      /* right: 0; */
      /* bottom: 0; */
      /* display: block; */
      /* width: 100%; */
      /* height: 100%; */
      /* touch-action: pan-y !important; */
      z-index: -1;
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