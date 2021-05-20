<template>
  <div class="flex items-center gap-x-4 bg-white px-4 py-2 rounded mb-2">
    <span class="w-8 text-gray-400 select-none">#{{ index + 1 }}</span>
    <span class="flex-1 flex items-center gap-x-4">
      <img
        class="w-12 rounded-full border-2 border-indigo-500 select-none"
        :src="user.picture.thumbnail"
        :alt="user.name.first + 'pic'"
      />
      <p class="text-indigo-500 font-bold">
        {{ user.name.first }} {{ user.name.last }}
      </p>
    </span>
    <span class="w-16 text-2xl text-center">
      <FontAwesomeIcon
        :icon="['fas', userGender(user.gender)]"
        :class="user.gender === 'male' ? 'text-blue-400' : 'text-pink-400'"
      />
    </span>
    <span class="w-16 text-center">{{ user.dob.age }}</span>
    <span class="w-16 text-center">{{ user.nat }}</span>
    <span class="w-48">{{ formatDate(user.dob.date) }}</span>
    <span class="w-32 flex justify-end">
      <Button class="justify-self-end" @click="$emit('set-user-info', user)">
        Details
      </Button>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

import Button from '~/components/Button.vue'

export default Vue.extend({
  components: { Button },
  props: {
    user: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    userGender(gender: string) {
      if (gender === 'male') return 'mars'
      if (gender === 'female') return 'venus'
      return 'genderless'
    },
    formatDate(date: string) {
      return dayjs(date).format('MM/DD/YYYY')
    },
  },
})
</script>

<style></style>
