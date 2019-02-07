<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">찍히면 죽는다</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/ae55a190-286b-11e9-b507-dfed5458c07c/ailogo.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        연애 플레이 리스트의 예능
      </div>
    </div>
    <img class="image"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549281011/heihei/title_001.jpg')">
    <img class="image"
         :style="{'margin-top': '8px'}"
         :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549281011/heihei/title_002.jpg')">
    <div class="rect"
         :style="{'margin-top': '8px'}">
      <img class="image"
           :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549281011/heihei/0001.jpg')">
      <img class="image"
           :src="scaledImage('https://res.cloudinary.com/dvcuac7zg/image/upload/v1549281011/heihei/0002.jpg')">
    </div>
    <div class="text">
      카메라와 마트의 콜라보인 연애 플레이 리스트의 예능입니다. 카메라와 긴밀한 컨셉을 가지고 있는 예능이기 때문에, 카메라 화면의 에셋들을 적극 활용한 시안들을 제작했습니다.
    </div>
    <img class="image"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/c_scale,w_960/v1549281009/heihei/%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC_%E1%84%8D%E1%85%B5%E1%86%A8%E1%84%92%E1%85%B5%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%A8%E1%84%82%E1%85%B3%E1%86%AB%E1%84%83%E1%85%A1_%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5.jpg'">
    <div class="text">
      가장 위의 시안이 채택되었으며, 클라이언트분께서 배틀그라운드이 같이 fps 게임의 느낌이 들기를 원했기 때문에 거친 질감과 대비가 드라마틱하게 보여질 수 있도록 사진을 보정하고 전체 색감을 보정했습니다.<br><br>

      인물에서 시선이 많이 벗어나지 않도록 파티클 같은 경우에는 분위기를 도와줄 수 있을 정도로만 추가했습니다.
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
    position: relative;
    font-weight: normal;
    line-height: 17px;
    font-size: 12px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 61.55% 1fr;
    /* display: flex; */
    /* grid-template-columns: 61.5fr 38.5fr; */
    .image {
      display: inline-block;
      /* width: auto; */
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