<template>
  <tr class="h-12 lg:h-16">
    <td class="text-gray-400 select-none">#{{ user.index + 1 }}</td>
    <td class="align-middle">
      <div class="flex items-center gap-x-4">
        <img
          class="
            rounded-full
            border-2 border-indigo-500
            w-10
            lg:w-12
            select-none
          "
          :src="user.picture.thumbnail"
          :alt="user.name.first + 'pic'"
        />
        <p class="text-indigo-500 font-bold">
          {{ user.name.first }}
          <span class="hidden sm:inline-block">{{ user.name.last }}</span>
        </p>
      </div>
    </td>
    <td class="border-gray-300 text-2xl text-center hidden sm:table-cell">
      <FontAwesomeIcon
        :icon="['fas', userGender(user.gender)]"
        :class="user.gender === 'male' ? 'text-blue-500' : 'text-pink-500'"
      />
    </td>
    <td class="border-gray-300 text-center hidden sm:table-cell">
      {{ user.dob.age }}
    </td>
    <td class="border-gray-300 text-center hidden sm:table-cell">
      {{ user.nat }}
    </td>
    <td class="border-gray-300 hidden lg:table-cell">
      {{ formatDate(user.dob.date) }}
    </td>
    <td class="border-gray-300 text-right">
      <Button @click="$emit('set-user-info', user)"> Details </Button>
    </td>
  </tr>
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

<style scoped>
table td {
  @apply px-3;
}

table tr:nth-child(even) td {
  @apply bg-white;
}
table tr:nth-child(odd) td {
  @apply bg-gray-50;
}

table tr:last-child td:first-of-type {
  @apply rounded-bl-lg;
}
table tr:last-child td:last-of-type {
  @apply rounded-br-lg;
}

@screen lg {
  table td {
    @apply px-4;
  }
}
</style>
