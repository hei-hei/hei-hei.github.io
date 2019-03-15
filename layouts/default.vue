<template>
  <nuxt />
</template>

<script>
// window.$crisp = []
// window.CRISP_WEBSITE_ID = 'dda1bb85-52ce-4654-be41-e3c4f9409e5f'
// (() => {
//   const d = document
//   const s = d.createElement('script')
//   s.src = 'https://client.crisp.chat/l.js'
//   s.async = 1
//   d.getElementsByTagName('head')[0].appendChild(s)
// })()
export default {
  mounted() {
    // window.addEventListener('pageshow', () => {})
    console.log(
      '%c          ',
      'font-size: 300px; background: url(https://media.giphy.com/media/vzO0Vc8b2VBLi/giphy.gif) no-repeat; background-size: contain;',
    )
    console.log('%cFeel free to contact me! 🤪', 'color: green; font-size: 18px')
    console.log('%cDeveloper 👉 https://github.com/ysm0622', 'color: green; font-size: 12px')
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'NanumSquareOTF';
  src: url('https://res.cloudinary.com/dvcuac7zg/raw/upload/v1549856055/heihei/NanumSquareOTFLight.otf') format('otf'),
    url('https://res.cloudinary.com/dvcuac7zg/raw/upload/v1549856055/heihei/NanumSquareOTFRegular.otf') format('otf'),
    url('https://res.cloudinary.com/dvcuac7zg/raw/upload/v1549856055/heihei/NanumSquareOTFExtraBold.otf') format('otf'),
    url('https://res.cloudinary.com/dvcuac7zg/raw/upload/v1549856055/heihei/NanumSquareOTFBold.otf') format('otf');
}

html {
  font-family: 'NanumSquareOTF', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  /* word-spacing: 1px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  word-break: keep-all;
}
*,
*:before,
*:after {
  letter-spacing: -0.03em;
  box-sizing: border-box;
  margin: 0;
}

html,
body,
#__nuxt,
#__layout {
  margin: 0;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
html {
  /* background-color: black; */
}

#__nuxt {
  display: grid;
}
#__layout {
  justify-self: center;
  max-width: 500px;
  width: 100%;
}
::-webkit-scrollbar {
  width: 0px; /* remove scrollbar space */
  background: transparent; /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

$ease: cubic-bezier(0, 0, 0.2, 1);

.fade-enter-active {
  animation: fadeIn 0.2s $ease;
}

.fade-leave-active {
  animation: fadeOut 0.075s $ease;
}
</style>
