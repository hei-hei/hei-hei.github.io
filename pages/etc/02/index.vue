<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.push(`/${$route.path.split('/')[1]}`)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">Tools</div>
      <div class="title">이상한 숲</div>
      <div class="tools">
        <img class="icon"
             src="https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg">
      </div>
      <div class="desc">
        이상한 숲속에 버려진 아이들
      </div>
    </div>
    <img class="image"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549287794/heihei/%E1%84%80%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%84%83%E1%85%B5_chracter.jpg'">
    <div class="text">
      만약 수상한 안개가 퍼져있는 이상한 숲에서 아이들이 살고있다면 어떤 모습을 가지고 있을까?, 각자의 아이들은 어떤 이야기가 있을까? 라는 아이디어를 가지고 디자인을 했습니다.<br><br>

      이 프로젝트를 시작했을 때 주어진 조건이 빅토리아 시대라는 것과, 거대 회사의 숨은 음모가 있다는 것이었습니다. 그 이외의 조건들은 없었기 때문에 자유롭게 이야기를 만들어 나갈 수 있었습니다.<br><br>

      제가 만든 이야기는 거대회사에서 부족한 인력을 보충하기 위해 보육원에서 아이들을 사거나 길거리의 아이들을 몰라 데려다가 일을 시키는 일이 많았었고, 그런 회사의 행동들은 입소문으로 퍼져 아이들은 살기 위해 그곳을 벗어났다는 내용이였습니다.<br><br>

      아이들은 어른에 대한 불신이 커져만 갔고 숲 속으로 도망친 아이들은 어른이 되지 않고자 옷으로 자신의 커져가는 몸을 가두었다는 컨셉으로 디자인했습니다.<br><br>

      로우폴리곤으로 제작할 계획이였기 때문에 최대한 단순화하면서도 빅토리아시대의 복식의 느낌을 강하게 내기 위해서 실제 과거의 사진들을 계속 단순화 하는 스케치를 진행하면서 디자인했습니다.
    </div>
    <img class="image"
         :src="'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549287796/heihei/%E1%84%80%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%84%83%E1%85%B5_sketch.jpg'">
    <div class="text">
      초기의 디자인 스케치와 빅토리아 시대의 복식에 대해 이해하기 위한 스케치입니다.
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