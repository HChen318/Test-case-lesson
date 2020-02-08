import axios from 'axios'

export const fetchData = (fn) => {
  axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
    fn(res.data)
  })
}

// 单纯promis
export const fetchData2 = (fn) => {
  return axios.get('http://www.dell-lee.com/react/api/demo1.json')
}
