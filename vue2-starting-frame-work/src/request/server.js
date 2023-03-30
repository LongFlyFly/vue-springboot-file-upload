import axios from 'axios'

let server = axios.create({
    baseURL: '/',
    timeout: 5000
})

// 请求拦截
server.interceptors.request.use(config => {
    console.log(config)
    return config
}, err => {
    console.log('errinfo:'+err)
})


// 响应拦截
server.interceptors.response.use(res => {
    console.log(res);
    return res.data
}, err => {
    console.log('errinfo:'+err)
})

export default server
