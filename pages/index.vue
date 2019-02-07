<template>
  <section class="container"
           ref="container">
    <div class="top">
      <img class="logo"
           src="https://images.velog.io/post-images/chris/18f010b0-276f-11e9-8a2a-c90b1e879aba/heilogo.svg">
      <img class="hands"
           src="https://images.velog.io/post-images/chris/d2f9f340-276f-11e9-9cfc-1356462f1aeb/handicon.svg">
      <div class="bio">
        안녕하세요.<br>
        이야기하는 디자이너<br>
        <span class="ko"
              v-if="nameToggle">황희영</span>
        <span class="en"
              v-else>Hei-Hei</span>
        <!-- <div class="name"></div>  -->
        입니다.
      </div>
      <a class="insta"
         @click="instaClick">
        <img class="insta__logo"
             src="https://images.velog.io/post-images/chris/e392f430-2770-11e9-9cfc-1356462f1aeb/instagram-brands-3.svg">
        <div class="insta__id">hei_hi_hei</div>
      </a>
    </div>
    <div class="section">
      <div class="rect"
           v-for="item in list"
           :key="item.title"
           :style="{ 'background-color': item.color}"
           @click="$router.push(item.title)">
        <div class="bg"
             :style="{
               'background-image': `url(${item.url})`,
               'background-position': `0% ${item.positionY}%`
               }" />
        <div class="title">{{ item.title }}</div>
        <img class="arrow"
             src="https://images.velog.io/post-images/chris/a3b24650-2774-11e9-8a2a-c90b1e879aba/arrowright.svg">
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
  data() {
    return {
      nameToggle: true,
      list: [
        {
          title: 'motion',
          color: '#E53786',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549214397/heihei/%E1%84%89%E1%85%A5%E1%86%AB_thumbnail_1.jpg',
          ),
          parallaxMinY: 10,
          parallaxMaxY: 40,
          positionY: 10,
        },
        {
          title: 'illust',
          color: '#F5F5F5',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549287328/heihei/monami_card_thumbnail-1.jpg',
          ),
          parallaxMinY: 11,
          parallaxMaxY: 50,
          positionY: 11,
        },
        {
          title: 'graphic',
          color: '#C9CBCA',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290397/heihei/somul_card_thumbnail-1.jpg',
          ),
          parallaxMinY: 0,
          parallaxMaxY: 23,
          positionY: 0,
        },
        {
          title: 'branding',
          color: '#F9E15C',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290123/heihei/jam_card_thumbnail.jpg',
          ),
          parallaxMinY: 5,
          parallaxMaxY: 50,
          positionY: 5,
        },
        {
          title: 'etc',
          color: '#F7F7F7',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290073/heihei/chima_card_thumbnail.jpg',
          ),
          parallaxMinY: 28,
          parallaxMaxY: 60,
          positionY: 28,
        },
      ],
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.nameToggle = !this.nameToggle
    // }, 3000)
    window.addEventListener('scroll', this.scrolled)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrolled)
  },
  methods: {
    instaClick: () => window.open('https://instagram.com/hei_hi_hei'),
    scaledImage(url) {
      return url && url.slice(0, 50) + 'c_scale,w_1500/' + url.slice(50)
    },
    scrolled() {
      const container = this.$refs.container
      if (!container) return
      console.log({ scroll: window.scrollY, height: this.$refs.container.clientHeight })
      this.list.map(
        item =>
          (item.positionY =
            (item.parallaxMaxY - item.parallaxMinY) * (window.scrollY / (container.clientHeight - window.innerHeight)) +
            item.parallaxMinY),
      )
    },
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
  font-weight: bold;
  letter-spacing: -0.03em;
  .top {
    margin-left: 33px;
    .logo {
      display: block;
      margin-top: 72px;
    }
    .hands {
      margin-top: 26px;
    }
    .bio {
      font-style: normal;
      line-height: 23px;
      font-size: 16.5px;
      margin-top: 89px;
      font-weight: bold;
      .ko {
        font-weight: bold;
      }
      .en {
        font-weight: 550;
      }
      @keyframes changeLetter {
        0% {
          content: '황희영';
        }
        50% {
          color: white;
        }
        100% {
          content: 'HeiHei';
        }
      }
      .name {
        display: inline-block;
        width: 47.22px;
        &::after {
          content: '';
          animation: changeLetter 3s linear infinite alternate;
        }
      }
    }
    .insta {
      margin-top: 23px;
      display: inline-flex;
      height: 20px;
      cursor: pointer;
      /* touch-action: none; */
      &:active, &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 1px;
      }
      &__logo {
        width: 13px;
      }
      &__id {
        font-weight: 500;
        margin-left: 3px;
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
  .section {
    margin-top: 74px;
    .rect {
      cursor: pointer;
      position: relative;
      padding-top: 38.133333333%;
      overflow: hidden;
      touch-action: none;
      user-select: none;
      &:hover,
      &:active {
        &::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
      &::before {
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
      .bg {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .title {
        position: absolute;
        top: 23px;
        /* display: inline-block; */
        font-weight: bold;
        /* padding-top: 23px; */
        margin-left: 33px;
        line-height: 20px;
        font-size: 14px;
      }
      .arrow {
        position: absolute;
        top: 23px;
        right: 25px;
      }
    }
  }
}
</style>
