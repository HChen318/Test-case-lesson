import { Counter } from './Couter'

describe('Couter 测试代码', () => {
  let counter = null

  beforeAll(() => {
    console.log('beforeAll')
  })
  beforeEach(() => {
    console.log('beforeEach')
    counter = new Counter()
  })
  afterEach(() => {
    console.log('afterEach')
  })

  afterAll(() => {
    console.log('afterAll')
  })

  // describe分组
  describe('测试增加相关的代码', () => {
    test('测试Counter addOne 方法', () => {
      console.log('测试Counter addOne 方法')
      counter.addOne()
      expect(counter.number).toEqual(1)
    })
  })

  describe('测试减少相关的代码', () => {
    test('测试Counter minusOne 方法', () => {
      console.log('测试Counter minusOne 方法')
      counter.minusOne()
      expect(counter.number).toEqual(-1)
    })
  })
})
