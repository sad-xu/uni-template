import { fetchNavList } from '@/api/api'

export default {
  namespaced: true,
  state: {
    // [{id,name, img}]
    platformList: [],
    // {id: obj}
    platformMap: {}
  },
  mutations: {
    SET_PLATFORM_LIST: (state, list) => {
      state.platformList = list
    },
    SET_PLATFORM_MAP: (state, map) => {
      state.platformMap = map
    }
  },
  actions: {
    getPlatformList({ commit }) {
      return fetchNavList().then((res) => {
        const map = {}
        const list = []
        res.forEach((item) => {
          const obj = {
            id: item.id,
            name: item.name,
            company: item.company_name,
            icon: item.icon_url,
            score: item.score,
            transfer: item.transfer_period,
            chain: item.chain,
            labels: item.tags ? item.tags.split(',') : [],
            weight: item.weight,
            accessed: item.accessed
          }
          map[item.id] = obj
          list.push(obj)
        })
        list.sort((a, b) => b.weight - a.weight)
        commit('SET_PLATFORM_LIST', list)
        commit('SET_PLATFORM_MAP', map)
      })
    }
  }
}
