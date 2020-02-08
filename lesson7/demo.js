import axios from 'axios'

export const runCallback = (callback) => {
  callback('abc')
}

export const createdObject = (classITem) => {
  new classITem()
}

export const fetchData2 = (fn) => {
  return axios.get('http://www.dell-lee.com/react/api/demo1.json').then(res => res.data)
}
