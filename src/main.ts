import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import microApps from "./micro-app";

const app = createApp(App);

app.use(router).mount("#app");

// 给子应用配置加上loader方法
const apps = microApps.map((item) => {
    return {
        ...item,
    };
});

registerMicroApps(apps, {
    beforeLoad: (app: any) => {
        console.log('before load app.name====>>>>>', app.name)
        return Promise.resolve();
    },
    beforeMount: [
        app => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
            return Promise.resolve();
        }
    ],
    afterMount: [
        app => {
            console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
            return Promise.resolve();
        }
    ],
    afterUnmount: [
        app => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
            return Promise.resolve();
        }
    ]
});
setDefaultMountApp('/sub-vue')
start()