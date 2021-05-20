<template>
  <div
    :class="[
      'fixed inset-0 flex justify-center items-center transition-opacity duration-200',
      isActive
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none',
    ]"
  >
    <span
      class="fixed inset-0 bg-black opacity-40"
      @click="$emit('close-user-info')"
    />
    <div
      class="
        relative
        bg-white
        p-8
        rounded-lg
        shadow-lg
        flex flex-col
        items-center
        max-w-lg
      "
    >
      <button
        class="absolute top-2 right-4 text-2xl text-gray-500 focus:outline-none"
        @click="$emit('close-user-info')"
      >
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <div v-if="userInfo" class="flex flex-col mt-16">
        <ProfilePic :profile-pic="profilePic" />
        <div class="text-center">
          <p class="inline-block text-indigo-500 text-2xl font-bold">
            {{ fullName }}
          </p>
          <font-awesome-icon
            :icon="['fas', genderIcon]"
            :class="[
              'text-xl fa-fw',
              userInfo.gender === 'male' ? 'text-blue-400' : 'text-pink-400',
            ]"
          />
        </div>
        <div class="flex flex-col gap-y-2 mt-8">
          <InfoRow icon="envelope" :text="userInfo.email" />
          <InfoRow
            :icon="genderIcon"
            :text="userInfo.gender"
            class="capitalize"
          />
          <InfoRow icon="birthday-cake" :text="userDateOfBirth" />
          <InfoRow icon="phone" :text="userInfo.phone" />
          <InfoRow icon="globe" :text="userInfo.nat" />
          <InfoRow icon="map-marker-alt" :text="address" />
          <InfoRow icon="portrait" :text="userInfo.id.value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

import ProfilePic from './ProfilePic.vue'
import InfoRow from '~/components/UserModal/InfoRow.vue'

import { IUser } from '~/shared/UserInterface'

export default Vue.extend({
  components: { InfoRow, ProfilePic },
  props: {
    isActive: {
      type: Boolean,
    },
    userInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    profilePic() {
      const { picture } = this.userInfo as IUser
      return picture && picture.large
    },
    fullName(): string {
      const { name } = this.userInfo as IUser
      return `${name.first} ${name.last}`
    },
    genderIcon(): string {
      const { gender } = this.userInfo as IUser
      return gender === 'male' ? 'mars' : 'venus'
    },
    userDateOfBirth() {
      const { dob } = this.userInfo as IUser
      return `${dayjs(dob?.date).format('MM/DD/YYYY')} (${dob?.age} years)`
    },
    address() {
      const { location } = this.userInfo as IUser
      return `${location?.street.number} ${location?.street.name}, ${location?.city}, ${location?.state}, ${location?.postcode}`
    },
  },
})
</script>
