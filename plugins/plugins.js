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

!(function(h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function() {
      ;(h.hj.q = h.hj.q || []).push(arguments)
    }
  h._hjSettings = { hjid: 1267181, hjsv: 6 }
  a = o.getElementsByTagName('head')[0]
  r = o.createElement('script')
  r.async = 1
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  a.appendChild(r)
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
