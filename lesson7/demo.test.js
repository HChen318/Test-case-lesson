import { runCallback, createdObject, fetchData2 } from './demo'
import axios from 'axios'
jest.mock('axios')

test('测试 runCallback', () => {
  const func = jest.fn() // mock函数,捕获函数的调用和返回结果,以及this和调用顺序就可以进行追溯
  func.mockReturnValueOnce('Dell') // 设置第一次模拟返回函数的的值
  // func.mockReturnValue('Dell') // 模拟返回值
  runCallback(func)
  // expect(func).toBeCalled()  // 是否被调用
  // expect(func.mock.calls.length).toBe(1)  // 断言
  // expect(func.mock.calls[0]).toEqual(['abc']) //调用这个函数传入参数是什么
  console.log(func.mock)
})

test('测试 createdObject', () => {
  const func = jest.fn()
  createdObject(func)
  console.log(func.mock)
})

// 改变函数的内部实现
test.only('测试 getData', async () => {
  // 模拟借口返回数据,不用请求后台借口
  axios.get.mockResolvedValue({ data: 'hello' })
  await fetchData2().then((data) => {
    expect(data).toBe('hello12')
  })
})
