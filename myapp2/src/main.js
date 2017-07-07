import Vue from 'vue'
import App from './App.vue'
//下面两行代码来自vue路由文档的说明
import Router from 'vue-router'
import routeConfig from './route'
import Resource from 'vue-resource'
Vue.use(Router);
Vue.use(Resource);
var router=new Router({
	routes:routeConfig
})

new Vue({
  el: '#app',
  router:router,
//mounted(){
//	this.$http.get("http://localhost:8080/src/j3.json").then(response=>{
//		this.someData=response.body;
//		console.log(this.someData)
//	})
//},
  render: h => h(App)
})
