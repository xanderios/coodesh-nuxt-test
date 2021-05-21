<template>
  <div class="flex items-center text-sm sm:text-base">
    <font-awesome-icon
      :icon="['fas', icon]"
      class="text-xl text-indigo-500 mr-2 fa-fw"
    />
    <p>{{ text || 'Unavailable' }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: undefined,
      required: true,
    },
  },
})
</script>
