<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">검정치마체</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/ae55a190-286b-11e9-b507-dfed5458c07c/ailogo.svg">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        밴드 검정치마의 분위기를 폰트로
      </div>
    </div>
    <img class="image"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549287789/heihei/typo_d_%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8E%E1%85%B5%E1%84%86%E1%85%A1%E1%84%8E%E1%85%A6_%E1%84%86%E1%85%A9%E1%84%8B%E1%85%B3%E1%86%B7.jpg'">
    <div class="text">
      개인적으로 느꼈던 밴드 검정치마의 특유의 분위기인, 무심하면서도 단단한 느낌을 폰트로 만들어봤습니다.
    </div>
    <img class="image"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549287789/heihei/typo_d_%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8E%E1%85%B5%E1%84%86%E1%85%A1%E1%84%8E%E1%85%A6.jpg'">
    <div class="text">
      검정치마의 곡 “i like watching you go” 의 가사 일부분입니다.
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    font-weight: normal;
    line-height: 17px;
    font-size: 12px;
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