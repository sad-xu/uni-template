// #ifdef H5
import { getWxAuth } from '@/api/api'
const jweixin = require('jweixin-module')
// #endif

export default {
  async onload() {
    // #ifdef H5
    if (navigator.userAgent.toLocaleLowerCase().match(/MicroMessenger/i)) {
      const url = window.location.href
      const auth = await getWxAuth(url)
      jweixin.config({
        debug: false,
        appId: auth.appId,
        timestamp: auth.timestamp, // 必填，生成签名的时间戳
        nonceStr: auth.nonceStr, // 必填，生成签名的随机串
        signature: auth.signature, // 必填，签名
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
      })
      const shareMsg = {
        title: '标题',
        desc: '描述',
        link: url, // 分享链接，必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://p5js.org/assets/img/favicon.ico' // 必须绝对路径
      }
      jweixin.ready(function() {
        jweixin.updateAppMessageShareData(shareMsg)
        jweixin.updateTimelineShareData(shareMsg)
      })
    }
    // #endif
  },
  // #ifndef H5
  // 小程序分享
  onShareAppMessage() {
    return {
      title: 'title',
      path: '/pages/home/home',
      imageUrl: '/static/logo.png',
      desc: 'desc'
    }
  },
  onShareTimeline() {
    return {
      title: 'title',
      path: '/pages/home/home',
      imageUrl: '/static/logo.png',
      desc: 'desc'
    }
  }
  // #endif
}

export async function wxShare() {

}
