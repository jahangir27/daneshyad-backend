import axios, { AxiosRequestConfig, Method } from 'axios';

const call = (method: Method, url: string, headers?: any,data?:any, options?: AxiosRequestConfig): Promise<any> =>{
    return new Promise(resolve => {
      axios({
        timeout: 100000,
        method: method,
        baseURL: process.env.FARAPOD_SERVER_ADDRESS,
        url,
        headers,
        data:data,
        ...options
      })
      .then(response => {
        resolve(response.data)}
        )
      .catch(err => {
          err.response ?
          resolve(err.response.data) :
          resolve({ success: false, message: 'Internal Server Error', data: err.message })
        }
      )
    })
  }

export default {
    call
};