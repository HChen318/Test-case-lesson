import { generateConfig,generateConfig2 } from './demo'

// test('测试 generateConfig 函数', () => {
//     expect(generateConfig()).toEqual({
//         server: 'http:localhost',
//         port: 8080
//     })
// })

// 生成快照,和老的文件做对比
test('测试 generateConfig 函数', () => {
    expect(generateConfig()).toMatchSnapshot()
})

test('测试 generateConfig 函数', () => {
    // 因为每次的时间都不一样
    expect(generateConfig2()).toMatchSnapshot({
        time:expect.any(Date)
    })
})
