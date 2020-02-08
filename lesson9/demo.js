import axios from 'axios'

export const fetchData = () => {
  return axios.get('/')
}

export const getNumber = () => {
  return '123'
}

`{
    data: '(function(){return 123})()'
}`
