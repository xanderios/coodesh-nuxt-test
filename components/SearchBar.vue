<template>
  <form class="max-w-3xl mx-auto mt-12">
    <p class="text-xl text-gray-500 text-center">
      Some lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
      assumenda nesciunt voluptatibus aperiam, natus quasi vel dolor mollitia
      pariatur.
    </p>
    <div class="flex items-center gap-x-2 mt-8">
      <input
        id=""
        type="text"
        name="firstName"
        :class="['h-12 flex-1 px-4', inputClasses]"
        :placeholder="queryPlaceholder"
        :value="searchQuery"
        @input="$emit('handle-query', $event.target.value)"
      />
      <select
        id=""
        name="searchFilter"
        :class="['h-12 pl-4 pr-8', inputClasses]"
        :value="filters.filterBy"
        @change="$emit('handle-filter-by', $event.target.value)"
      >
        <option value="none" selected>Filter by</option>
        <option value="name">Name</option>
        <option value="nationality">Nationality</option>
      </select>
      <div class="h-12 flex border text-2xl border-gray-300 rounded">
        <button
          :class="[
            'rounded-l',
            filters.gender === 'male'
              ? 'bg-indigo-500 text-white'
              : 'bg-white text-blue-500',
            genderClasses,
          ]"
          @click="handleGender($event, 'male')"
        >
          <FontAwesomeIcon :icon="['fas', 'mars']" />
        </button>
        <button
          :class="[
            'rounded-r',
            filters.gender === 'female'
              ? 'bg-indigo-500 text-white'
              : 'bg-white text-pink-500',
            genderClasses,
          ]"
          @click="handleGender($event, 'female')"
        >
          <FontAwesomeIcon :icon="['fas', 'venus']" />
        </button>
      </div>
    </div>
  </form>
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
      if (this.filters.filterBy === 'name') return 'Username, eg: "John Doe"'
      if (this.filters.filterBy === 'nationality')
        return 'Nationality, eg: "EN"'
      return 'Select a filter'
    },
    inputClasses() {
      return 'rounded border border-gray-300 focus:border-indigo-500 outline-none appearance-none transition-all duration-200'
    },
    genderClasses() {
      return 'px-4 outline-none focus:outline-none transition-all duration-200'
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
