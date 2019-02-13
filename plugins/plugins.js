import Vue from 'vue'
import { Plugin } from 'vue-fragment'
import CopyRight from '@/components/CopyRight.vue'
import quicklink from 'quicklink/dist/quicklink.mjs'

Vue.use(Plugin)
Vue.config.devtools = false

Vue.mixin({
  methods: {
    scaledImage(url) {
      return url && `${url.slice(0, 50)}c_limit,f_auto,q_80,w_1000/${url.slice(50)}`
    },
    quicklink,
  },
  components: {
    CopyRight,
  },
})
