<template>
  <section class="container">
    <div class="top">
      <img class="arrow__back"
           @click="$router.go(-1)"
           src="https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg">
      <div class="caption">contents</div>
      <div class="title">branding</div>
      <div class="count">06</div>
    </div>
    <div class="rect"
         v-for="item in list"
         :key="item.number"
         :style="{'background-color': item.color, color:['04','05'].indexOf(item.number) !== -1 ? 'white' : 'black'}"
         @click="$router.push(`${$route.name}/${item.number}`)">
      <img class="background"
           :src="item.url">
      <div class="name">{{ item.name }}</div>
      <div class="type">{{ item.type }}</div>
      <div class="number">{{ item.number }}</div>
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
  data() {
    return {
      width: window.innerWidth,
      list: [
        {
          name: '귤잼',
          type: 'contents design',
          number: '01',
          color: '#E53786',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290123/heihei/jam_card_thumbnail.jpg',
          ),
        },
        {
          name: '소핫',
          type: 'contents design',
          number: '02',
          color: '#F4F4F4',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290133/heihei/sohot_card_thumbnail.jpg',
          ),
        },
        {
          name: '지식탐탐',
          type: 'contents design',
          number: '03',
          color: '#202020',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290391/heihei/tamyam_card_thumbnail-1.jpg',
          ),
        },
        {
          name: '아카이브',
          type: 'contents design',
          number: '04',
          color: '#F4F4F4',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290116/heihei/archive_card_thumbnail.jpg',
          ),
        },
        {
          name: 'piki enter',
          type: 'contents design',
          number: '05',
          color: '#F4F4F4',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290083/heihei/enter_card_thumbnail.jpg',
          ),
        },
        {
          name: 'dode',
          type: 'logo design',
          number: '06',
          color: '#F4F4F4',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290095/heihei/dode_card_thumbnail.jpg',
          ),
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('resize', this.windowResized)
    window.scrollTo(0, 0)
  },
  methods: {
    windowResized() {
      this.width = window.innerWidth
    },
    scaledImage(url) {
      return url && url.slice(0, 50) + 'c_scale,w_750/' + url.slice(50)
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
      line-height: 34px;
      font-size: 24px;
    }
    .count {
      display: inline-block;
      position: absolute;
      right: 39px;
      top: 29px;
      font-weight: 800;
      line-height: 34px;
      font-size: 24px;
    }
  }
  .rect {
    padding-top: 100%;
    position: relative;
    font-weight: normal;
    line-height: 17px;
    font-size: 12px;
    cursor: pointer;
    .video {
      position: absolute;
      top: 0;
      /* height: 100%; */
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
    .background {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
    }
    .name {
      position: absolute;
      display: inline-block;
      left: 37px;
      top: 22px;
    }
    .type {
      position: absolute;
      top: 22px;
      left: 50%;
      transform: translateX(-50%);
    }
    .number {
      position: absolute;
      top: 22px;
      right: 39px;
    }
  }
}
</style>
