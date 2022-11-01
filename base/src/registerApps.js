// 注册应用，开启应用
import { registerMicroApps, start } from 'qiankun'

const loader = (loading) => { }

// 注册
// 注册的名称，拿取的资源，注入到哪里去，激活条件，加载的loading
registerMicroApps([{
    name: 'm-vue',
    entry: '//localhost:20000',
    container: '#container',
    activeRule: '/vue',
    loader
}, {
    name: 'm-react',
    entry: '//localhost:30000',
    container: '#container',
    activeRule: '/react',
    loader
}], {
    beforeLoad() {
        console.log('加载前');
    },
    beforeMount() {
        console.log('挂载前');
    },
    afterMount() {
        console.log('挂载后');
    },
    beforeUnmount() {
        console.log('销毁前');
    },
    afterUnmount() {
        console.log('销毁后')
    }
})


// 开启
start({
    sandbox: {
        experimentalStyleIsolation:true
    }
})