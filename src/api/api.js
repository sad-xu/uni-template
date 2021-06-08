import request from '@/utils/request'
import { baseUrl } from '@/utils'

export function commonRequest() {
  return request({
    url: baseUrl + 'source/area_list',
    method: 'GET'
  })
}

export function getWxAuth(url) {
  return request({
    url: 'http://share.afa.ai/api/core/common/sys/wx/jsapi/staffprod/getJsapiSignature?url=' + encodeURIComponent(url),
    method: 'get'
  })
}
