import Vue from 'vue'
import {
  // login,
  fetchUserInfo,
  updateUsetInfo,
  fetchZixuanList,
  deleteZixuan,
  addZixuan,
  fetchUnreadMsgNum,
  fetchFavPlatformList,
  AddFavPlatform,
  removeFavPlatform
} from '@/api/user'
import errTracker from '../../utils/errTracker'

export default {
  namespaced: true,
  state: {
    userInfo: {
      id: 0,
      avatar: '',
      name: '数藏用户',
      phone: '',
      sex: 0
    },
    // 自选
    zixuanMap: {},
    // 感兴趣的平台
    favPlatformList: [],
    // 未读消息数
    unreadNum: 0
  },
  mutations: {
    SET_USER_INFO(state, info) {
      state.userInfo = { ...state.userInfo, ...info }
    },
    SET_ZIXUAN(state, obj) {
      state.zixuanMap = obj
    },
    TOGGLE_ZIXUAN(state, id) {
      if (state.zixuanMap[id]) {
        Vue.delete(state.zixuanMap, id)
      } else {
        Vue.set(state.zixuanMap, id, true)
      }
    },
    SET_FAV_PLATFORM(state, list) {
      state.favPlatformList = list
    },
    Add_FAV_PLATFORM(state, id) {
      state.favPlatformList.push(id)
    },
    REMOVE_FAV_PLATFORM(state, i) {
      state.favPlatformList.splice(i, 1)
    },
    SET_UNREAD_NUM(state, count) {
      state.unreadNum = count
    },
    MINUSE_UNREAD_NUM(state) {
      if (state.unreadNum) {
        state.unreadNum -= 1
      }
    }
  },
  actions: {
    getUserInfo({ commit }) {
      return fetchUserInfo().then((res) => {
        errTracker.setUserId(res.id)
        commit('SET_USER_INFO', {
          id: res.id,
          avatar: res.image,
          name: res.name,
          phone: res.phone,
          sex: res.sex
        })
      })
    },
    // 修改个人信息
    updateUsertInfo({ commit, state }, info) {
      return updateUsetInfo({
        ...state.userInfo,
        ...info
      }).then((res) => {
        commit('SET_USER_INFO', info)
      })
    },
    // 获取自选
    getUserZixuan({ commit }) {
      return fetchZixuanList().then((res) => {
        const obj = {}
        res.forEach((item) => {
          obj[item.id] = true
        })
        commit('SET_ZIXUAN', obj)
      })
    },
    // 加/删自选
    toggleZixuan({ commit, state }, id) {
      if (state.zixuanMap[id]) {
        deleteZixuan(id)
      } else {
        addZixuan(id)
      }
      commit('TOGGLE_ZIXUAN', id)
    },
    // 获取关注平台列表
    getFavPlatformList({ commit }) {
      return fetchFavPlatformList().then((res) => {
        commit('SET_FAV_PLATFORM', res.platforms)
      })
    },
    // 关注\取关 平台
    toggleFavPlatform({ commit, state }, id) {
      id = +id
      const i = state.favPlatformList.findIndex((item) => item === id)
      if (i >= 0) {
        removeFavPlatform(id).then(() => {
          uni.showToast({
            icon: 'none',
            title: '取关成功'
          })
        })
        commit('REMOVE_FAV_PLATFORM', i)
      } else {
        AddFavPlatform(id).then(() => {
          uni.showToast({
            icon: 'none',
            title: '关注成功'
          })
        })
        commit('Add_FAV_PLATFORM', id)
      }
    },
    // 获取未读数
    getUreadNum({ commit }) {
      return fetchUnreadMsgNum().then((res) => {
        commit('SET_UNREAD_NUM', res.alarm)
      })
    },
    // 已读 - 1
    setRead({ commit }) {
      commit('MINUSE_UNREAD_NUM')
    }
  }
}
