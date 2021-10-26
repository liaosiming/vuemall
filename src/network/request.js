import axios from 'axios'
//请求封装
export function request(config){

  //创造请求实例
  const instance = axios.create({
      baseURL:"http://10.107.0.65:8080",
      timeout:5000
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    console.log(error);
  })

  //响应拦截
  instance.interceptors.response.use(result => {
    return result.data
  }, error => {
    console.log(error);
  })

  return instance(config);
}