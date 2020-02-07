import { fetchData, fetchData2 } from './fetchData'

// 回调类型异步函数的测试
// test('fetchData 返回结果为{success：true}', (done) => {
//     fetchData((data) => {
//         expect(data).toEqual({
//             success:true
//         })
//         // 只有这个done调用才结束
//         done()
//     })
// })

// test('fetchData 返回结果为{success：true}', () => {
//     return fetchData2().then(res => {
//         expect(res.data).toEqual({
//             success: true
//         })
//     })
// })

//测试404
// test('fetchData 返回结果为404', () => {
//     // 至少执行一次expect
//     expect.assertions(1)
//     return fetchData2().catch(e => {
//         expect(e.toString().indexOf('404') > -1).toEqual(true)
//     })
// })

// test('fetchData 返回结果为{success：true}', () => {
//     // resolves拿到所有数据toMatchObject包含这个子数据data{}
//     return expect(fetchData2()).resolves.toMatchObject({
//         data:{
//             success:true
//         }
//     })
// })

// test('fetchData 返回结果为404', () => {
//     // resolves拿到所有数据toMatchObject包含这个子数据data{}
//     return expect(fetchData2()).rejects.toThrow()
// })

// test('fetchData 返回结果为{success：true}', async () => {
//     const res = await fetchData2()
//     expect(res.data).toEqual({
//         success: true
//     })
// })

test('fetchData 返回结果为404', async () => {
    try {
        await fetchData2()
    } catch(e) {
        expect(e.toString()).toEqual('Error: Request failed with status code 404')
    }

})