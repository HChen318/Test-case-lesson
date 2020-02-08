import addDivTobody from './dom'
import $ from 'jquery'

test('测试 addDivTobody', () => {
  addDivTobody()
  expect($('body').find('div').length).toBe(1)
})
