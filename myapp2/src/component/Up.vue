<template>
	
  <div>
  	
  	
  	<nav class="tab">
  		<router-link to="/one" class='mus'>发现音乐</router-link>
		<router-link to="/tow" class='my'>我的</router-link>
		<!--<router-link to="/three">3</router-link>-->
  	</nav>
	
	
  </div>
</template>

<script>
</script>

<style>
	.tab{
		width: 100%;
		height: 30px;
		position: fixed;
		bottom: 0;
		/*background: #FFFFFF;*/
		background: rgba(0,0,0,0.3);
	}
	.tab .mus,.my{
		display: block;
		float: left;
		width: 50%;
		text-align: center;
		line-height: 30px;
		color: #FFFFFF;
		font-size: 14px;
		/*border-top: 1px solid;*/
		
	}
	.tab .mus{
		border-right: 1px solid #fff;
	}
	.tab .router-link-active{
		color: #D43C33;
		font-weight: bold;
		/*font-size: 16px;*/
	
	}
</style>