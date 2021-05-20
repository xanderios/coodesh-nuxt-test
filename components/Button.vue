<template>
  <button
    class="
      px-4
      py-2
      bg-indigo-500
      rounded
      font-bold
      text-white
      focus:outline-none
      hover:bg-indigo-600
      disabled:pointer-events-none
      transition-all
      duration-200
    "
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
