import timer from './timer'

jest.useFakeTimers() // 异步函数对timer进行mock模拟初始化

test('timer 测试', () => {
  const fn = jest.fn()
  timer(fn)
  jest.advanceTimersByTime(3000) // 快进3秒
  expect(fn).toHaveBeenCalledTimes(1) // 函数被调用几次
})
