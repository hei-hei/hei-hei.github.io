<template>
  <section class="container">
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
              v-else>Hei-Hei</span> 입니다.
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
        <img class="bg"
             :src="item.url">
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
          color: '#FFD600',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549292142/heihei/line_1st_thumbnail.jpg',
          ),
        },
        {
          title: 'illust',
          color: '#009974',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549292142/heihei/monami_1st_thumbnail.jpg',
          ),
        },
        {
          title: 'graphic',
          color: '#436EC1',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549292695/heihei/somul_1st_thumbnail.jpg',
          ),
        },
        {
          title: 'branding',
          color: '#E5E5E5',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549292142/heihei/jam_1st_thumbnail.jpg',
          ),
        },
        {
          title: 'etc',
          color: '#FFFFFF',
          url: this.scaledImage(
            'https://res.cloudinary.com/dvcuac7zg/image/upload/v1549292142/heihei/chima_1st_thumbnail.jpg',
          ),
        },
      ],
    }
  },
  mounted() {
    setInterval(() => {
      this.nameToggle = !this.nameToggle
    }, 3000)
  },
  methods: {
    instaClick: () => window.open('https://instagram.com/hei_hi_hei'),
    scaledImage(url) {
      return url && url.slice(0, 50) + 'c_scale,w_375/' + url.slice(50)
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
    }
    .insta {
      margin-top: 23px;
      display: inline-flex;
      height: 20px;
      cursor: pointer;
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
      &:active {
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
        position: absolute;
        top: 0;
        width: 100%;
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
