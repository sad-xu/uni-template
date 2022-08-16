export default {
  platformList: (state) => state.app.platformList,
  platformMap: (state) => state.app.platformMap,
  userInfo: (state) => state.user.userInfo,
  userZixuan: (state) => state.user.zixuanMap,
  favPlatformList: (state) => state.user.favPlatformList,
  unreadNum: (state) => state.user.unreadNum
}
