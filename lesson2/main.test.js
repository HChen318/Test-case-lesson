let main = require('./main')
let {
    add,
    minus,
    multipli
} = main

test('测试加法3+3', () => {
    expect(add(3, 7)).toBe(10)
})

test('测试减法3-3', () => {
    expect(minus(3, 3)).toBe(0)
})