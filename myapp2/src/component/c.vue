<template>
  <div id="app">
		<div class="ss">
			<form action="">
				<i class="fdj"></i>
				<input type="text" placeholder="搜索歌手、歌曲、专辑"/>
				<i></i>
			</form>
		</div>
		<p class="hotSearch">热门搜索</p>
		<ul class='ss-li'>
			<li v-for="item in someData.result.hots">{{item.first}}</li>
		</ul>
  </div>
</template>

<script>
	export default{
		name:'c',
		data:function(){
			return{
				someData:{}
			}
		},
		mounted:function(){
			this.$http.get('http://localhost:8080/src/data/j4.json').then(response=>{
				this.someData=response.body;
			})
		}
	}
</script>

<style>
	.ss{
		padding: 15px 10px;
		border-bottom: 1px solid #EFF0F1;
		
	}
	.ss form{
		height: 30px;
		width: 100%;
		border: none;
		border-radius: 15px;
		background: #ebecec;
		display: flex;
	}
	.ss form i{
		display: inline-block;
		width: 30px;
		min-width: 30px;
		height: 30px;
		/*background-image: url(../img/fdj2.png) no-repeat center center;*/
	}
	.ss form .fdj{
		background: url(../img/fdj2.png) no-repeat center center;
		background-size: 60%;
	
	}
	.ss form input{
		height: 30px;
		/*margin-left: 30px;*/
		width: 100%;
		border: none;
		background: #ebecec;
		
	}
	.ss-li{
		padding-left: 10px;
	}
	.ss-li li{
		height: 32px;
		font-size: 14px;
		text-align: center;
		line-height: 32px;
		float: left;
		padding: 0 14px;
		margin: 0 8px 8px 0;
		border:1px solid #ECEDF0;
		border-radius: 16px;
		
	}
	.hotSearch{
		font-size: 13px;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
	}
</style>