import { uploadErrMsg } from '@/api/api'

/** 错误捕获 */
class ErrTracker {
  constructor() {
    this.userId = ''
  }

  /** 设置用户id */
  setUserId(id = '') {
    this.userId = id
  }

  /** 获取基本信息 */
  getBaseInfo() {
    const sysInfo = uni.getSystemInfoSync()
    return {
      version: uni.getAppBaseInfo().appVersion,
      userId: this.userId,
      t: +new Date(),
      url: getCurrentPages()[0].route,
      sysInfo: JSON.stringify(sysInfo)
    }
  }

  /** 生成错误信息 */
  generateErrInfo(err) {
    console.log(err)
    return {
      type: err.name || (err.promise && 'Promise'),
      msg: err.message || err.reason?.message,
      stack:
        err.error?.stack || err.reason?.stack || err.stack || err.toString(),
      ...this.getBaseInfo()
    }
  }

  /** 上传 */
  uploadErr(err) {
    try {
      const errInfo = this.generateErrInfo(err)
      console.log('***!!***', errInfo)
      uploadErrMsg(JSON.stringify(errInfo))
    } catch (err) {
      console.log(err)
    }
  }
}

export default new ErrTracker()
