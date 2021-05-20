<template>
  <div class="bg-indigo-500 text-white py-4">
    <div class="container mx-auto flex items-center justify-between">
      <p class="text-2xl font-bold select-none">Pharma Inc</p>
      <div class="flex items-center">
        <div class="text-right mr-2">
          <p class="text-xs">{{ randomUser ? 'Logged in as' : 'Hello,' }}</p>
          <p class="font-bold">{{ userName }}</p>
        </div>
        <ProfilePic v-if="randomUser" :user-img="userImg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfilePic from '~/components/Header/ProfilePic.vue'

export default Vue.extend({
  components: { ProfilePic },
  data() {
    return {
      randomId: Math.floor(Math.random() * 5000) + 1,
      randomUser: null,
    }
  },
  computed: {
    userName(): string {
      if ((this as any).randomUser) {
        return `${(this as any).randomUser.name.first} ${
          (this as any).randomUser.name.last
        }`
      } else return 'Guest'
    },
    userImg(): string {
      return (this as any).randomUser.picture.thumbnail
    },
  },
  async created() {
    await this.$axios
      .get(
        // Include only user name ad picture `inc=name,picture`
        `https://randomuser.me/api/1.3/?id=${this.randomId}&inc=name,picture`
      )
      .then((response) => response.data.results)
      .then((res) => {
        this.randomUser = res[0]
      })
  },
})
</script>
