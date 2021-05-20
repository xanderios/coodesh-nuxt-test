<template>
  <div class="max-w-6xl mx-auto mt-12">
    <ul>
      <div class="flex items-center gap-x-4 text-gray-400 px-4 py-4">
        <span class="w-8">#</span>
        <span class="flex-1">Pacient</span>
        <span class="w-16 text-center">Gender</span>
        <span class="w-16 text-center">Age</span>
        <span class="w-16 text-center">Nat</span>
        <span class="w-48"
          >Date of birth <FontAwesomeIcon :icon="['fas', 'birthday-cake']"
        /></span>
        <span class="w-32"></span>
      </div>
      <li v-for="(user, index) in users" :key="index">
        <ListItem
          :user="user"
          :index="index"
          :is-loading="isLoading"
          @set-user-info="$emit('set-user-info', user)"
        />
      </li>
    </ul>
    <Button
      :class="['block mx-auto mt-8 mb-16', isLoading && 'bg-gray-500']"
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
import ListItem from '~/components/UserList/ListItem.vue'

export default Vue.extend({
  components: { ListItem },
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
