<template>
  <div>
    <input id="" v-model="searchQuery" type="text" name="firstName" />
    <select id="" v-model="filters.filterBy" name="searchFilter">
      <option value="name" selected class="text-black">Name</option>
      <option value="nationality">Nationality</option>
    </select>
    <select id="" v-model="filters.gender" name="genderFilter">
      <option value="none" selected>None</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <ul>
      <li
        v-for="(user, i) in resultQuery"
        :key="i"
        @click="setUserInfoId(user.id)"
      >
        {{ user.name.first }} {{ user.name.last }}
      </li>
    </ul>
    <p v-if="isLoading" class="inline-block animate-spin">
      <FontAwesomeIcon :icon="['fas', 'sync-alt']" />
    </p>
    <button class="block" @click="loadMoreUsers">Load more</button>
    <br />
    <a href="https://github.com/xanderios"
      ><FontAwesomeIcon :icon="['fab', 'github']" />xanderios
    </a>
    <UserInfo :user-id="userInfoId" />
  </div>
</template>

<script lang="ts">
import { user } from '~/shared/user'
import FilterMixin from '~/mixins/searchFilters'
import UserInfo from '~/components/UserInfo.vue'

interface data {
  userInfoId: null | object
  users: Array<user>
  searchQuery: string
  filters: {
    filterBy: string
    gender: string
  }
  page: number
  isLoading: boolean
}

export default FilterMixin.extend({
  components: { UserInfo },
  data(): data {
    return {
      userInfoId: null,
      users: [],
      searchQuery: '',
      filters: {
        filterBy: 'name',
        gender: 'none',
      },
      page: 0,
      isLoading: false,
    }
  },
  computed: {
    resultQuery(): Array<user> {
      return this.filter(this.users, this.searchQuery, this.filters)
    },
  },
  mounted() {
    this.loadMoreUsers()
  },
  methods: {
    async fetchUsers(): Promise<void> {
      this.isLoading = true
      await setTimeout(() => {
        this.$axios
          .get(
            // Exclude unused values `exc=login,registered,cell`
            `https://randomuser.me/api/1.3/?exc=login,registered,cell&page=${this.page}&results=10&seed=foo`
          )
          .then((response) => response.data.results)
          .then((res) => {
            this.users = [...this.users, ...res]
            this.isLoading = false
          })
      }, 1000)
    },
    loadMoreUsers(): void {
      this.page += 1
      this.fetchUsers()
    },
    setUserInfoId(userId: object) {
      this.userInfoId = userId
    },
  },
})
</script>
