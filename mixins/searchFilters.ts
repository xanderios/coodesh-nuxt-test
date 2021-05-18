import Vue from 'vue'
import { user } from '~/shared/user'
import { filters } from '~/shared/filters'

export default Vue.extend({
  methods: {
    filter(
      list: Array<user>,
      seachQuery: string,
      filters: filters
    ): Array<user> {
      seachQuery = seachQuery.toLowerCase()
      const queryLetters: string[] = seachQuery.split(' ')

      if (seachQuery.length > 0) {
        if (filters.filterBy === 'name') {
          list = list.filter((user) =>
            queryLetters.every((v) => user.name.first.toLowerCase().includes(v))
          )
        }
        if (filters.filterBy === 'nationality') {
          list = list.filter((user: user) => {
            return queryLetters.every((v) => user.nat.toLowerCase().includes(v))
          })
        }
      }

      if (filters.gender !== 'none')
        return list.filter((user: user) => user.gender === filters.gender)
      return list
    },
  },
})
