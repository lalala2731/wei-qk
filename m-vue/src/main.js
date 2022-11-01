import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import routes from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')

// 子应用需要暴漏接入协议

let history;
let router;
let app;

function render(props = {}) {
    // console.log('render')
    // 需要一个base
    history = createWebHashHistory('/vue')
    // 每次调用都创建新的router实例
    router = createRouter({
        history,
        routes
    })
    app = createApp(App)
    let { container } = props
    // 如果是在基座中访问的，就再基座的容器中寻找#app
    // 否则就是自己访问的，就直接挂载#app
    // 默认会拿20000端口的html插入到容器中，所以容器中会有#app
    app.use(router).mount(container ? container.querySelector('#app') : '#app')
}

// 乾坤提供了一个变量，如果不是在基座中访问的，这个值就是false，
// 那么就直接调用render函数
if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

export async function bootstrap() {
    console.log('vue3 app botstraped');
}

export async function mount(props) {
    console.log('vue3 app mount');
    render(props)
}

export async function unmount() {
    console.log('vue3 app unmount');
    history = null
    router = null;
    app = null;
}