// 使用模拟的文件
// jest.unmock('./demo')
import { fetchData } from './demo' jest.mock('./demo')  // 来自模拟文件
const { getNumber } = jest.requireActual('./demo') // 来自真正的模拟数据

test('fetchData 测试', () => {
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})
test('getNumber 测试', () => {
  expect(getNumber()).toEqual('123')
})

// 一
// import axios from 'axios'
// jest.mock('axios')
// test('fetchData 测试', () => {
//     axios.get.mockResolvedValue("(function(){return '123'})()")
//     return fetchData().then(data => {
//         expect(eval(data)).toEqual('123')
//     })
// })
