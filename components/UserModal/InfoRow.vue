<template>
  <div class="flex items-center">
    <font-awesome-icon
      :icon="['fas', icon]"
      class="text-xl text-indigo-500 mr-2 fa-fw"
    />
    <p>{{ text || 'N/A' }}</p>
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
