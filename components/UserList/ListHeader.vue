<template>
  <tr class="h-12 lg:h-16 text-white">
    <th class="bg-indigo-500 rounded-tl-lg w-1/12 text-left">#</th>
    <th class="bg-indigo-500 w-5/12 sm:w-6/12 text-left">Pacient</th>
    <th class="bg-indigo-500 hidden sm:table-cell sm:w-2/12">Gender</th>
    <th class="bg-indigo-500 hidden sm:table-cell sm:w-1/12">Age</th>
    <th class="bg-indigo-500 hidden sm:table-cell sm:w-1/12">Nat</th>
    <th class="bg-indigo-500 hidden lg:table-cell lg:w-4/12 text-left">
      <FontAwesomeIcon :icon="['fas', 'birthday-cake']" class="mr-2" />
      Date of birth
    </th>
    <th class="bg-indigo-500 rounded-tr-lg w-7/12 text-right sm:w-2/12">
      <FontAwesomeIcon :icon="['fas', 'info-circle']" class="mr-8 lg:mr-9" />
    </th>
  </tr>
</template>

<style scoped>
table th {
  @apply px-3;
}

@screen lg {
  table th {
    @apply px-4;
  }
}
</style>
