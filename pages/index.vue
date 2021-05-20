<template>
  <div class="bg-gray-100">
    <div class="container mx-auto flex flex-col items-center">
      <div class="w-full">
        <SearchBar
          :search-query="searchQuery"
          :filters="filters"
          @handle-query="handleQuery"
          @handle-filter-by="handleFilterBy"
          @handle-gender="handleGender"
        />
        <UserList
          :users="resultQuery"
          :is-loading="isLoading"
          @set-user-info="(user) => setUserInfo(user)"
          @load-more-users="loadMoreUsers"
        />
      </div>
      <UserModal
        :is-active="showUserInfo"
        :user-info="userInfo"
        @close-user-info="showUserInfo = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import FilterMixin from '~/mixins/searchFilters'

import UserList from '~/components/UserList/List.vue'
import UserModal from '~/components/UserModal/UserModal.vue'
import SearchBar from '~/components/SearchBar.vue'

import { IUser } from '~/shared/UserInterface'

export default FilterMixin.extend({
  components: {
    UserList,
    UserModal,
    SearchBar,
  },
  data() {
    return {
      showUserInfo: false,
      userInfo: null as null | Object,
      users: [] as Array<IUser>,
      searchQuery: '',
      filters: {
        filterBy: 'none',
        gender: 'none',
      },
      page: 0,
      isLoading: false,
    }
  },
  computed: {
    resultQuery(): Array<IUser> {
      return this.filter(this.users, this.searchQuery, this.filters)
    },
  },
  mounted() {
    this.loadMoreUsers()
  },
  methods: {
    handleQuery(v: string): void {
      this.searchQuery = v
    },
    handleFilterBy(v: string): void {
      this.filters.filterBy = v
    },
    handleGender(v: string): void {
      if (this.filters.gender === v) this.filters.gender = 'none'
      else this.filters.gender = v
    },
    async fetchUsers(): Promise<void> {
      this.isLoading = true
      // await setTimeout(() => { // 3s delay for visualizing button feedback
      await this.$axios
        .get(
          // Exclude unused values `exc=login,registered,cell`
          `https://randomuser.me/api/1.3/?exc=login,registered,cell&page=${this.page}&results=10&seed=foo`
        )
        .then((response) => response.data.results)
        .then((res) => {
          this.users = [...this.users, ...res]
          this.isLoading = false
        })
      // }, 3000)
    },
    loadMoreUsers(): void {
      this.page += 1
      this.fetchUsers()
    },
    setUserInfo(user: IUser) {
      this.userInfo = user
      this.showUserInfo = true
    },
  },
})
</script>
