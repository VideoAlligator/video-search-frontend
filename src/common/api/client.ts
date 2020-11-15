import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  headers: { Pragma: 'no-cache' },
})

export const client = {
  get: (url: string, options = {}): Promise<AxiosResponse> =>
    instance.get(url, options),
  //   post: (url: string, payload: object) => instance.post(url, payload),
  //   put: (url: string, payload: object) => instance.put(url, payload),
  //   delete: (url: string) => instance.delete(url),
}
