<template>
  <div class="max-w-3xl mx-auto mt-12">
    <p class="text-sm sm:text-xl text-gray-500 text-center">
      Some lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
      assumenda nesciunt voluptatibus aperiam, natus quasi vel dolor mollitia
      pariatur.
    </p>
    <form class="flex flex-col items-center sm:flex-row gap-x-2 mt-8 mx-auto">
      <div class="group-focus-within:text-indigo-500 relative w-full">
        <input
          id=""
          type="text"
          name="firstName"
          class="
            block
            h-10
            w-full
            px-4
            rounded
            border border-gray-300
            focus:border-indigo-500
            outline-none
            appearance-none
            transition-all
            duration-200
          "
          :placeholder="queryPlaceholder"
          :value="searchQuery"
          @input="$emit('handle-query', $event.target.value)"
        />
        <FontAwesomeIcon
          :icon="['fas', 'search']"
          class="absolute right-3 top-3 text-gray-400"
        />
      </div>
      <div class="inline-flex w-full sm:w-min gap-x-2 mt-2 sm:mt-0">
        <select
          id=""
          name="searchFilter"
          class="
            inline-block
            h-10
            pl-4
            pr-8
            rounded
            border border-gray-300
            focus:border-indigo-500
            outline-none
            appearance-none
            transition-all
            duration-200
          "
          :value="filters.filterBy"
          @change="$emit('handle-filter-by', $event.target.value)"
        >
          <option value="none" selected>Filter by</option>
          <option value="name">Name</option>
          <option value="nationality">Nationality</option>
        </select>
        <div
          class="
            h-10
            inline-flex
            border
            text-xl
            lg:text-2xl
            border-gray-300
            rounded
          "
        >
          <button
            :class="[
              'rounded-l px-3 outline-none focus:outline-none transition-all duration-200',
              filters.gender === 'male'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-blue-500',
            ]"
            @click="handleGender($event, 'male')"
          >
            <FontAwesomeIcon :icon="['fas', 'mars']" />
          </button>
          <span class="block h-full bg-gray-300 w-px" />
          <button
            :class="[
              'rounded-r px-3 outline-none focus:outline-none transition-all duration-200',
              filters.gender === 'female'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-pink-500',
            ]"
            @click="handleGender($event, 'female')"
          >
            <FontAwesomeIcon :icon="['fas', 'venus']" />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
    filters: {
      type: Object,
      required: true,
    },
  },
  computed: {
    queryPlaceholder() {
      if (this.filters.filterBy === 'name') return 'eg: "John Doe"'
      if (this.filters.filterBy === 'nationality') return 'eg: "EN"'
      return 'Filter users'
    },
  },
  methods: {
    handleGender(event: Event, gender: string) {
      event.preventDefault()
      this.$emit('handle-gender', gender)
    },
  },
})
</script>

<style scoped>
select {
  background-image: url('https://image.flaticon.com/icons/png/512/25/25623.png');
  background-size: 12px;
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: center;
}
</style>
