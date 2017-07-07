<template>
  <div id="app">
  	<router-view></router-view>
		<up class="tab"></up>
		
		<!--<down></down>-->
		
  </div>
</template>

<script>
import Up from './component/Up.vue'
import Down from './component/Down.vue'
export default {
  name: 'app',
//data () {
//  return {
//  	
//  }
//},
  components:{
  	up:Up,
  	Down:Down
  }
}
</script>

<style>
*{
	box-sizing: border-box;
}

html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img {
	margin: 0;
	padding: 0;
}

fieldset,img {
	border: none;
}

address,caption,cite,code,dfn,th,var {
	font-style: normal;
	font-weight: normal;
}

ul,ol,li {
	list-style: none;
}

a {
	text-decoration: none;
}

.clearfix:after{
	content: ".";
	clear: both;
	display: block;
	height: 0;
	visibility: hidden;
}
html,body{
	width: 100%;
	height: 100%;
	background: #FCFCFD;
}
/*.tab{
	height:50px;
	position: fixed;
	bottom: 50px;
	background: red;
}*/
</style>
