// 当路径为/vue的时候，会访问20000端口，发送的是fetch请求。
// 因为之前的react的默认端口是3000，所以若不设置publicPath，则默认为/，就会向3000发送请求
// 因为是跨域，所以要设置允许跨域
// 将打包的资源设置为umd，就可以拿到window上的属性，拿到里面导出的各个钩子
module.exports = {
    // 让子应用访问的静态资源都是向20000端口上发送
    publicPath: '//localhost:20000',
    devServer: {
        // 设置本应用的端口为20000
        port: 20000,
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    },
    // 获取打包的内容 ，格式为umd（window+commonjs+esm）
    // 可以直接使用window上的属性
    configureWebpack: {
        output: {
            libraryTarget: 'umd',
            // 打包名称
            library:'m-vue'
        }
    }
}