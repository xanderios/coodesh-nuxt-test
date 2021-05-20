import Vue from 'vue'
import { IUser } from '~/shared/UserInterface'

interface filters {
  filterBy: string | 'none' | 'name' | 'nationality'
  gender: string | 'none' | 'male' | 'female'
}

export default Vue.extend({
  methods: {
    filter(list: IUser[], seachQuery: string, filters: filters): IUser[] {
      seachQuery = seachQuery.toLowerCase()
      const queryLetters: string[] = seachQuery.split(' ')

      function filterByName(arr: IUser[]): IUser[] {
        return arr.filter((user: IUser) =>
          queryLetters.every((v) => user.name.first.toLowerCase().includes(v))
        )
      }

      function filterByNat(arr: IUser[]): IUser[] {
        return arr.filter((user: IUser) =>
          queryLetters.every((v) => user.nat.toLowerCase().includes(v))
        )
      }

      if (seachQuery.length > 0) {
        if (filters.filterBy === 'none') {
          list = [...filterByName(list), ...filterByNat(list)]
        }
        if (filters.filterBy === 'name') {
          list = filterByName(list)
        }
        if (filters.filterBy === 'nationality') {
          list = filterByNat(list)
        }
      }

      if (filters.gender !== 'none')
        return list.filter((user: IUser) => user.gender === filters.gender)

      return list
    },
  },
})
