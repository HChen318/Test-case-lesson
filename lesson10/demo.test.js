// jest.mock发现util是一个类,会自动把类的构造函数和方法变成jest.fn()
// const Util = jest.fn()  虚构的util
// Util.a = jest.fn()
import demoFuntion from './demo'
import Util from './util'
jest.mock('./util')

test('测试 demoFuntion运行', () => {
  demoFuntion() // 怎么知道demoFuntion是执行过,里面的util方法和ab方法执行了,ab里面方法很复杂所以只需要知道他执行了
  expect(Util).toHaveBeenCalled()
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})
