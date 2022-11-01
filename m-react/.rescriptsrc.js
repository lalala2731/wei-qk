module.exports = {
    webpack: (config) => {
        config.output.library = 'm-react';
        config.output.libraryTarget = 'umd';
        // 协议自适应
        config.output.publicPath = '//localhost:30000/'
        return config
    },
    devServer: (config) => {
        config.headers = {
            'Access-Control-Allow-Origin':'*'
        }
        return config
    }

}