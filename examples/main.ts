import Vue from 'vue';
import App from './App.vue';


// import HelloWorld from '../packages/to-build';

// @ts-ignore
import HelloWorld from 'test-vue-cli-4';

console.log('HelloWorld', HelloWorld);

Vue.config.productionTip = false;


Vue.use(HelloWorld);

new Vue({
  render: h => h(App)
}).$mount('#app');
