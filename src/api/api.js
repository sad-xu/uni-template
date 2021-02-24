import request from '@/utils/request'
import { baseUrl } from '@/utils'

export function commonRequest() {
  return request({
    url: baseUrl + 'source/area_list',
    method: 'GET'
  })
}
