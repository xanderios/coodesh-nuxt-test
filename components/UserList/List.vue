<template>
  <div class="max-w-6xl mx-auto mt-12 text-sm lg:text-base">
    <table class="table-fixed border-separate w-full">
      <thead>
        <ListHeader />
      </thead>
      <tbody>
        <ListData
          v-for="user in users"
          :key="user.index"
          :user="user"
          :is-loading="isLoading"
          @set-user-info="$emit('set-user-info', user)"
        />
      </tbody>
    </table>
    <Button
      :class="[
        'block mx-auto shadow-md mt-8 mb-16',
        isLoading && 'bg-gray-500',
      ]"
      :disabled="isLoading ? true : false"
      @click="$emit('load-more-users')"
    >
      <p class="inline-block">Load more users</p>
      <span :class="['inline-block ml-1', isLoading && 'animate-spin']">
        <FontAwesomeIcon :icon="['fas', 'sync-alt']" />
      </span>
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Button from '~/components/Button.vue'
import ListData from '~/components/UserList/ListData.vue'
import ListHeader from '~/components/UserList/ListHeader.vue'

export default Vue.extend({
  components: { Button, ListData, ListHeader },
  props: {
    users: {
      type: undefined,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style scoped>
table {
  border-spacing: 0;
}
</style>
