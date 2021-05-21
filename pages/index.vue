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
        :page="currentPage"
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
      users: [] as IUser[],
      searchQuery: '',
      filters: {
        filterBy: 'none',
        gender: 'none',
      },
      currentPage: 1,
      isLoading: false,
    }
  },
  computed: {
    resultQuery(): Array<IUser> {
      return this.filter(this.users, this.searchQuery, this.filters)
    },
  },
  mounted() {
    const { p, name, gender } = this.$route.query
    this.currentPage = Number(p) || 1
    if (name) {
      this.filters.filterBy = 'name'
      this.searchQuery = (name as string).replace('%20', ' ')
    }
    if (gender) {
      this.filters.gender = gender as string
    }
    this.fetchUsers()
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
          `https://randomuser.me/api/1.3/?exc=login,registered,cell&page=${this.currentPage}&results=50&seed=foo`
        )
        .then((response) => response.data.results)
        .then((res) => {
          this.users = [...this.users, ...res].map((user: IUser, index) => ({
            ...user,
            index,
          }))
          this.isLoading = false
        })
      // }, 3000)
    },
    loadMoreUsers(): void {
      this.filters.filterBy = 'none'
      this.filters.gender = 'none'
      this.searchQuery = ''
      this.currentPage += 1
      this.fetchUsers()
    },
    setUserInfo(user: IUser): void {
      this.userInfo = user
      this.showUserInfo = true
    },
  },
})
</script>
