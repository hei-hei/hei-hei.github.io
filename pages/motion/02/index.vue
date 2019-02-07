<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">움직임 일기</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        일상의 움직임
      </div>
    </div>
    <div class="rect">
      <div class="left">
        <img class="image"
             src="https://res.cloudinary.com/dvcuac7zg/image/upload/c_scale,w_375/v1549218257/heihei/pf_2dAnimation_01.gif">
      </div>
      <div class="right">
        <img class="image"
             src="https://res.cloudinary.com/dvcuac7zg/image/upload/c_scale,w_375/v1549218263/heihei/pf_2dAnimation_05.gif">
      </div>
      <div class="bottom">
        <img class="image"
             src="https://res.cloudinary.com/dvcuac7zg/image/upload/c_scale,w_750/v1549218262/heihei/pf_2dAnimation_04.gif">
      </div>
    </div>
    <div class="text">
      갑작스럽게 걸려버린 감정 덩어리를<br>
      가만히 바라보다가 기분이 이상해진다.<br>
      물 위에 떠 있는 듯이,
    </div>
    <div class="rect">
      <div class="left">
        <img class="image"
             src="https://res.cloudinary.com/dvcuac7zg/image/upload/c_scale,w_375/v1549218257/heihei/IMG_0212.gif">
      </div>
      <div class="right">
        <img class="image"
             src="https://res.cloudinary.com/dvcuac7zg/image/upload/c_scale,w_375/v1549218263/heihei/IMG_0213.gif">
      </div>
      <div class="bottom">
        <img class="image"
             src="https://res.cloudinary.com/dvcuac7zg/image/upload/c_scale,w_750/v1549218262/heihei/pf_2dAnimation_02.gif">
      </div>
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