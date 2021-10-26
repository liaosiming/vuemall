import {request} from 'network/request';

export function getHomeList(){
  return request({
    url: '/product-sku/toGetProductSku'
  })
}