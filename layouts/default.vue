<template>
  <nuxt />
</template>

<script>
export default {}
</script>

<style lang="scss">
html {
  font-family: 'NanumSquareOTF', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html,
body,
#__nuxt,
#__layout {
  margin: 0;
  /* overflow-x: hidden; */
  -webkit-overflow-scrolling: touch;
}
html {
  position: absolute;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  margin: auto;
  left: 0;
  right: 0;
}

#__nuxt {
}
#__layout {
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
