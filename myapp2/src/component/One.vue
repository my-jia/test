<template>
  <div>
  	
	<h1 class="loge"></h1>
	<div class="nav">
		<router-link to="/one/a"><p>推荐音乐</p></router-link>
		<router-link to="/one/b"><p>热歌榜</p></router-link>
		<router-link to="/one/c"><p>搜索</p></router-link>
		<div class="clearfix"></div>
	</div>
	<div class="dian"></div>
	
	<router-view></router-view>
  </div>
</template>

<script>
	export default{
		name:'one'
	}
</script>

<style>
	.loge{
		width: 100%;
		height: 64px;
		position: fixed;
		top: 0;
		background: #D43C33 url(../img/2017-06-03_102856.png) no-repeat 10px center;
		z-index: 99;
	}
	.nav{
		width: 100%;
		height: 40px;
		position: fixed;
		top: 64px;
		
		z-index: 99;
		
	}
	.nav p{
		display: inline-block;
		color: #333;
    	font-size: 15px;
	}
	.nav a{
		display: block;
		width: 33.33333%;
		height: 40px;
		float: left;
		text-align: center;
		line-height: 40px;
		background: #fff;
		border-bottom: 1px solid #E6E6E6;
	}
	.dian{
		width: 100%;
		height: 104px;
	}
	.router-link-active p{
	color: #D33A31;
	height: 40px;
	border-bottom: 2px solid #D33A31;
	}
</style>