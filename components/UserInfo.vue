<template>
  <div class="absolute right-0 bottom-0">
    {{ userInfo }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    userId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      userInfo: {},
    }
  },
  computed: {},
  watch: {
    async userId() {
      await this.$axios
        .get(`https://randomuser.me/api/1.3/?seed=foo&id=${this.userId}`)
        .then((response) => response.data.results.name)
        .then((res) => {
          this.userInfo = res
        })
    },
  },
}
</script>

<style></style>
