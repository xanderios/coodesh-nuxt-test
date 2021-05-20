<template>
  <img
    :src="profilePic"
    alt="profile picture"
    class="
      absolute
      left-[50%]
      -top-12
      transform
      translate-x-[-50%]
      mx-auto
      border-2 border-indigo-500
      rounded-full
      shadow-md
    "
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    profilePic: {
      type: String,
      required: true,
    },
  },
})
</script>
