import {
  add,
  minus,
  multipli
} from './main'

test('测试加法3+3', () => {
  expect(add(3, 7)).toBe(10)
})

test('测试减法3-3', () => {
  expect(minus(3, 3)).toBe(0)
})

// npm run test 只在commjs运行
// jest(babel-jest) //jest集成
// babel-core // 检测是否安装
// .取babelrc配置
