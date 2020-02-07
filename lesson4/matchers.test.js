
// test('测试10与10相匹配', () => {
//     // 类似于===
//     expect(10).toBe(10)
// })

// test('测试对象内容相等', () => {
//     // toEqual 匹配器
//     const a = {one : 1}
//     expect(a).toEqual({one : 1})
// })

// test('测试内容是否为Null值', () => {
//     // toBeNull 匹配器
//     const a = undefined
//     expect(a).toBeNull()
// })

// test('测试内容是否为undefined值', () => {
//     // toBeUndefined 匹配器
//     const a = undefined
//     expect(a).toBeUndefined()
// })

// test('测试内容是否定义过', () => {
//     const a = undefined
//     expect(a).toBeDefined()
// })

// test('toBeTruthy 匹配器', () => {
//     const a = 0
//     expect(a).toBeTruthy()
// })

// test('toBeFalsy 匹配器', () => {
//     const a = 0
//     expect(a).toBeFalsy()
// })

// test('toBeFalsy 匹配器', () => {
//     const a = 1
//     expect(a).not.toBeFalsy()
// })

// 数字相关的匹配器
// test('toBeGreaterThan', () => {
//     const a = 10
//     expect(a).toBeGreaterThan(11)
// })

// test('toBeLessThan', () => {
//     const a = 10
//     expect(a).toBeLessThan(11)
// })

// test('toBeGreaterThanOrEqual', () => {
//     // toBeLessThanOrEqual 
//     const a = 10
//     expect(a).toBeGreaterThanOrEqual(10)
// })

// 浮点数相加 不准确用这个
// test('toBeCloseTo', () => {
//     const firstNum = 0.1
//     const secondNum = 0.2
//     expect(firstNum + secondNum).toBeCloseTo(0.3)
// })

// string
test('toMatch', () => {
    const str = 'http://www.baidu.com'
    // expect(str).toMatch('baidu')
    expect(str).toMatch(/baidu/)
})

// Array,Set
test('toContain', () => {
    const arr = ['dell','lee','imooc']
    // expect(str).toMatch('baidu')
    expect(arr).toContain('dell')
})

// 异常
const throwNewError = () => {
    throw new Error('this is a new error')
}

test('toThrow', () => {
    // expect(throwNewError).toThrow()
    expect(throwNewError).toThrow('this is a new error')
})



