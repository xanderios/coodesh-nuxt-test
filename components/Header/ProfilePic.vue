<template>
  <img class="rounded-full border-2 border-white select-none" :src="userImg" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    userImg: {
      type: String,
      default: null,
    },
  },
})
</script>
