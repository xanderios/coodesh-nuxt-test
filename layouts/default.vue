<template>
  <div class="h-full flex flex-col text-gray-600">
    <Header />
    <Nuxt class="flex-1" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
})
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
</style>
