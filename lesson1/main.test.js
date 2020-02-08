// var result = add(3, 7)
// var expect = 10

// if (result != expect) {
//     throw Error(`3+7等于${expect},但结果是${result}`)
// }

// var result = minus(3, 3)
// var expect = 0

// if (result != expect) {
//     throw Error(`3-3等于${expect},但结果是${result}`)
// }

function expect (result) {
  return {
    tobe: function (actual) {
      if (result != actual) {
        throw Error(`实际值${actual},但结果为${result}`)
      }
    }
  }
}

function test (desc, fn) {
  try {
    fn()
    console.log(`${desc}测试通过`)
  } catch (err) {
    console.log(`${desc}没有通过 ${err}`)
  }
}

test('测试加法3+3', () => {
  expect(add(3, 7)).tobe(10)
})

test('测试减法3-3', () => {
  expect(minus(3, 3)).tobe(0)
})
